import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

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


  // getting the coordinates of the coin
  interact.getCoin = async () => {
    const row = await ask(`What is the row of the coin`, (x) => {
        const row = x;
      if ( row < 1 || row > 11 ) {
        throw Error(`Not a valid row`);
      }
      return row;
    });
    const col = await ask(`What is the column of the coin`, (x) => {
        const col = x;
        if ( col < 1 || col > 11 ) {
          throw Error(`Not a valid column`);
        }
        return col;
      });
    console.log(`You played row: ${row} col: ${col}`);
    return row*col;
  };

  //seeing the outcome, not correct because there is no game
  interact.seeOutcome = async (outcome) => {
    console.log(`There is no outcome because the game is not made}`);
  };

  const part = isAlice ? backend.Alice : backend.Bob;
  await part(ctc, interact);

  //getting and displaying the balance after the wagers have been exchanged
  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();
})();