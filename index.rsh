'reach 0.1';

const ROWS = 11;
const COLS = 11;
const CELLS = ROWS * COLS;
const Board = Array(Bool, CELLS);

//the state consists of the index of the cat, and the array of blockers
const State = Object({catIndex: UInt, 
                      blockers: Board});
        
const bfa = [true, false];


const boardEmpty = array(Bool, [false,false,true,false,false,false,false,false,true,false,false,
  false,false,false,false,false,false,false,false,false,false,true,
  false,false,true,false,false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false,false,false,
  false,true,false,false,false,false,false,false,true,false,false,
  false,false,false,false,false,false,false,false,false,false,false,
  false,false,false,true,false,false,false,false,false,false,false,
  false,false,false,false,false,false,false,false,false,false,false,
  false,false,false,false,false,false,true,false,false,false,false,
  true,false,false,false,false,false,false,false,false,false,false]);

//const boardEmpty = Array.replicate(CELLS, false);

const startCat = 60;

//initializes the board
const boardInit = () => ({
  catIndex: startCat,
  blockers: boardEmpty,})


// checks to see if the cat has escaped given its index
const catEscaped = (st) => {
  const i = st.catIndex;
  //checks to see if the cat is on top or bottom row
   //checks to see if the cat is in left or right column
  return (i < COLS || i >= ROWS * (COLS - 1)) || 
  (i % COLS == 0 || i % COLS == COLS - 1);
}

//checks if the cat is blocked
// Precondtion: cat must not be on the edge (escaped already)
const catBlocked = (st) =>{
  require(!catEscaped(st));

  //checks if there are blocks ro the right, left, below, and above. todo fix
  return st.blockers[st.catIndex - 1] && st.blockers[st.catIndex + 1] &&
  st.blockers[st.catIndex - ROWS] && st.blockers[st.catIndex + ROWS] &&
  st.blockers[st.catIndex - ROWS + 1] && st.blockers[st.catIndex + ROWS + 1 ];
}

//makes sure the cat move is valid
function getValidCatMove(interact, st){
  //require(st.catIndex >= 0);
  //require(st.catIndex <= 120);
  const _catMove = interact.getMove(st);
  //todo, make sure the cat move is not on block or same spot. in array. adjust getMove
  return declassify(_catMove);
}

//makes sure the blocker move is valid
function getValidBlockMove(interact, st){
  const _blockMove = interact.getHex(st);
  assume(_blockMove < 121);
  //todo, make sure block move is within array, not on exisiting block or cat
  return declassify(_blockMove);
}

//gets the random block state
function getRandomBlockState(interact,  st){
  const _ranState = interact.randomBlockers(st);
  return declassify(_ranState);
}

// applies the cat move to the board state
function applyCatMove(st, i){
  require(!catBlocked(st));
  return {
    catIndex: i,
    blockers: st.blockers,
  };
}

//applies the blocker move the board state
function applyBlockerMove(st, m){
  //require(!catEscaped(st));
  require(m < 121);
  //require(st.blockers.length == 121);

  return {
    catIndex: st.catIndex,
    blockers: st.blockers.set(m, true),
  };
}

// game over, returns true if the cat is blocked or the cat escaped
function gameOver(st){
  return catEscaped(st) || catBlocked(st);
}

//the player object
const Player =
      { ...hasRandom,
        outcome: Fun([Bool], Null),
        informTimeout: Fun([], Null),
        };

//Alice the cat
const Alice =
      { ...Player,
        getMove: Fun([State], UInt),
        setWager: UInt};

//Bob the blocker
const Bob =
      { ...Player,
        getHex: Fun([State], UInt),
        acceptWager: Fun([UInt], Null) };

const DEADLINE = 10;
export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      
      const informTimeout = () => {
        each([A, B], () => {
          interact.informTimeout(); }); };

      A.only(() => {
        const wager = declassify(interact.setWager); });
      A.publish(wager)
        .pay(wager);
      commit();

      B.only(() => {
        interact.acceptWager(wager);
        });
      B.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));


        var state = boardInit();
        invariant(balance() == 2 * wager);
        
        //game plays when cat has not escaped and not been blocked
        while(!gameOver(state)){
          commit();
         A.only(() => {
           const catMove = getValidCatMove(interact, state); });
         A.publish(catMove);
         
         const state2 = applyCatMove(state, catMove);
         commit();

         B.only(() => {
          const blockMove = getValidBlockMove(interact, state2); });
        B.publish(blockMove);
        
        state = applyBlockerMove(state2, blockMove);
        continue;
        }
        //paying out the wagers
        assert(catEscaped(state) || catBlocked(state));
        const [toA, toB] = (catEscaped(state) ? [2, 0] : [0, 2])
        transfer(toA * wager).to(A);
        transfer(toB * wager).to(B);
        commit();
      //displaying the outcome to both players
      each([A, B], () => {
        interact.outcome(catEscaped(state)); });
      exit(); });