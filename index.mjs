import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

// variable which represents the transaction hosh
var transactionHash = 0;


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
    transactionHash = JSON.stringify(info);
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    transactionHash = JSON.stringify(info);
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
    interact.setWager = amt;
  } else {
    interact.acceptWager = async (amt) => {
      const accepted = await ask(
        `Do you accept the wager of ${fmt(amt)}?`,
        yesno
      );
      if (accepted) {
        return;
      } else {
         //return coins to Alice, so no funds are left in the smart contract
         console.log(`Bob declines the wager, returning funds to Alice`); //only shows up on Bob's console, may need fixing (todo)
         console.log(`Alice will recieve funds at next timeout`);
         await stdlib.wait(10);
        process.exit(0);
      }
    };
  }

  var indexTransHash = transactionHash.indexOf("}")
  transactionHash = transactionHash.substring(indexTransHash - 20, indexTransHash -2);

  // Idea is that we have two different thingies maximum randomness nice

let size = 11;
let stepX = 683, stepY=503; // Sufficiently large prime number
 
// Only grabbing 7 characters of hex b/c we want to avoid integer overflow
let offsetX = parseInt(transactionHash.substr(2,7),16);
let offsetY = parseInt(transactionHash.substring(9,7),16);

//array to store the psuedo random numbers which determines where blockers go
var randomArray = new Array(offsetX % 7 + 5);

for(let numRandoms = (offsetX % 7 + 5); numRandoms > 0; --numRandoms){
	let tmpX = (offsetX+numRandoms*stepX)%size;
	let tmpY = (offsetY+numRandoms*stepY)%size;
	//console.log(tmpX,tmpY); //delete later, here now for testing purposes
	// If you want to convert it to a single number:
	let num = tmpX*size+tmpY;
  //console.log(num); //delete later, here now for testing purposes

  randomArray[numRandoms] = num;
}

function render(st){
  let visual = '\n';
  let cnt = 0;
  for(let i = 0; i < 11; i++){
     if(i % 2 == 1){
       visual += ' ';
     }
    for(let j = 0; j < 11; j++){
     if(st.blockers[cnt] || randomArray.includes(cnt)){
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
   // getting the index of a unused hex
   interact.getHex = async (state) => {
    console.log(`The current state is ${render(state)}`);
    const index = await ask(`What is the index you want to put the hex?`, (x) => {
        const index = x;
      if ( index < 0 || index > 120 ) {
        throw Error(`Location must be between Row: 0-11 and Col: 0-11`);
      } else if (index == state.catIndex) {
        throw Error(`The cat is on that hex`);
      } else if (state.blockers[index]) {
        throw Error(`A block already exists on that hex`);
      } else if (randomArray.includes(index)) {
        throw Error(`A block already exists on that hex`);
      } else {
        return index;
      }
      return index;
    });
    console.log(`You played ${index}`);
     return index;
  };

  //getting the move for the cat
  interact.getMove = async (state) => {
    console.log(`The current state is ${render(state)}`);
    console.log(`The current cat location is  ${state.catIndex}`);
    const index = await ask(`What is the index you want to move the cat?`, (x) => {
      const index = x;

    //first checks if the index spot is one away from the current index spot
    if(state.catIndex == index - 1 || state.catIndex - 1 == index ||
      state.catIndex - 11 == index || state.catIndex - 10 == index ||
      state.catIndex  == index - 11 || state.catIndex == index - 12){
    }
    else{
      throw Error(`The new location is not close to original`);
    }


    if ( index < 0 || index > 120 ) {
        throw Error(`Location must be between Row: 0-11 and Col: 0-11`);
    } else if (index == state.catIndex) {
        throw Error(`The cat is already on that hex`);
    } else if (state.blockers[index]) {
        throw Error(`A block already exists on that hex`);
    } else if (randomArray.includes(index)) {
      throw Error(`A block already exists on that hex`);
    }
    else {
        return index;
    }
  });
  console.log(`You played ${index}`);
  return index;
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