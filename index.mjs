import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

function render(st){
 let visual = '\n\t';
 let cnt = 0;
 for(let i = 0; i < 11; i++){
    if(i % 2 == 1){
      visual += ' ';
    }
   for(let j = 0; j < 11; j++){
    if(st.blockers[cnt]){
      visual += 'b'
    }
    else if(cnt == st.catIndex){
      visual += 'c'
    }
    else{
      visual += 'o'
    }
    cnt++;
   }
   visual += '\n'
 }
 return visual;
}

(async () => {
  const stdlib = await loadStdlib();

  //gets who the player is
  const isAlice = await ask(
    `Are you Alice?`,
    yesno
  );
  const who = isAlice ? 'Alice' : 'Bob';

  console.log(`Starting Le Chat Noir as ${who}`);

  // printing out the player type. todo, simplify this with ? notation
  if(isAlice){
    console.log(`You are the cat and will try to escape`);
  }
  else{
    console.log(`You are are the player and will try to block in the cat`);
  }

  // creating the account
  let acc = null;
  const createAcc = await ask(
    `Would you like to create an account? (only possible on devnet)`,
    yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  //creating the contract
  let ctc = null;
  const deployCtc = await ask(
    `Do you want to deploy the contract? (y/n)`,
    yesno
  );
  if (deployCtc) {
    ctc = acc.deploy(backend);
    const info = await ctc.getInfo();
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.attach(backend, info);
  }

  //format for the currency
  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const before = await getBalance();
  console.log(`Your balance is ${before}`);

  const interact = { ...stdlib.hasRandom };

  interact.informTimeout = () => {
    console.log(`There was a timeout.`);
    process.exit(1);
  };

  //geting the wagers / accepting the wagers
  if (isAlice) {
    const amt = await ask(
      `How much do you want to wager?`,
      stdlib.parseCurrency
    );
    interact.wager = amt;
  } else {
    interact.acceptWager = async (amt) => {
      const accepted = await ask(
        `Do you accept the wager of ${fmt(amt)}?`,
        yesno
      );
      if (accepted) {
        return;
      } else {
        process.exit(0);
      }
    };
  }

   // getting the index of a unused hex
   interact.getHex = async (state) => {
    console.log(`The current state is ${render(state)}`);
    const index = await ask(`What is the index you want to put the hex?`, (x) => {
        const index = x;
      if ( index < 0 || index > 120 ) {
        throw Error(`Location must be between Row: 0-11 and Col: 0-11`);
      } else if (index = state.catIndex) {
        throw Error(`The cat is on that hex`);
      } else if (state.blockers[index]) {
        throw Error(`A block already exists on that hex`);
      } else {
        return index;
      }
    });
  };

  //getting the move of the cat, up, down, left, or right. todo
  interact.getMove = async (state) => {
    console.log(`The current state is ${render(state)}`);
    const index = await ask(`What is the index you want to move the cat?`, (x) => {
      const index = x;
    if ( index < 0 || index > 120 ) {
      throw Error(`Location must be between Row: 0-11 and Col: 0-11`);
    } else if (index = state.catIndex) {
      throw Error(`The cat is already on that hex`);
    } else if (state.blockers[index]) {
      throw Error(`A block already exists on that hex`);
    } else {
      return index;
    }
  });
  };
  
  //printing the reusults of the game to the players
  //this code can be made prettier
  interact.doneState = async (st) => {
    console.log(`Game over the final state is ${render(st)}`);
  };

  const part = isAlice ? backend.Alice : backend.Bob;
  await part(ctc, interact);

  //getting and displaying the balance after the wagers have been exchanged
  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();
})();