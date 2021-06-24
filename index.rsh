'reach 0.1';

const ROWS = 11;
const COLS = 11;
const CELLS = ROWS * COLS;
const Board = Array(Bool, CELLS);

//the state consists of the index of the cat, and the array of blockers
const State = Object({catIndex: UInt, 
                      blockers: Board});

const startCat = 60;

//initializes the board
const boardInit = (boardState) => ({
  catIndex: startCat,
  blockers: boardState,})


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
  //the offsets which factor in which row 
  const row = (st.catIndex - (st.catIndex % 11)) / 11;
  const offsetA = row % 2;
  const offsetB = (offsetA + 1) % 2;

  //checks if there are blocks ro the right, left, below, and above.
  return st.blockers[st.catIndex - 1] && st.blockers[st.catIndex + 1] &&
  st.blockers[st.catIndex - ROWS - offsetB] && st.blockers[st.catIndex + 10 + offsetA] &&
  st.blockers[st.catIndex - 10 - offsetB] && st.blockers[st.catIndex + ROWS + offsetA ];
}

//makes sure the cat move is valid
function getValidCatMove(interact, st){
  const _catMove = interact.getMove(st);
  return declassify(_catMove);
}

//makes sure the blocker move is valid
function getValidBlockMove(interact, st){
  const _blockMove = interact.getHex(st);
  assume(_blockMove < 121);
  return declassify(_blockMove);
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
  require(m < 121);
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
        setWager: UInt,
        initRandomBoard: Fun([], Board) };

//Bob the blocker
const Bob =
      { ...Player,
        getHex: Fun([State], UInt),
        acceptWager: Fun([UInt], Null) };

const DEADLINE = 10;

// 1. Alice sets the wager
//    a. Alice publishes the wager and pays it
// 2. Alice sets the Board to a random board state
//    a. Alices publishes the new board
// 3. Bob accepets the wager and pays it before timing out
// 4. The intial state of the game is initialized with Alice's random board
// 5. While the game is not over (cat has not been blocked and not escaped) the game continues:
//    a. Alice gets a cat move and publishes it to the blockchain
//    b. The state of the board is updated with the new cat move
//    c. Bob get a block move and publishes it to the blockchain
//    d. The state of the board is updated with the new block move
//    e. Loops
// 6. Winner player gets payed two times the inital wager
// 7. The outcome of the game is displayed to each of the players

export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      
      const informTimeout = () => {
        each([A, B], () => {
          interact.informTimeout(); }); };

      A.only(() => {
        // 1. Alice sets the wager
        const wager = declassify(interact.setWager);
        // 2. Alice sets the Board to a random board state
        const boardState = declassify(interact.initRandomBoard());
       });
       // 1a. Alice publishes the wager and pays it
      A.publish(wager)
        .pay(wager);
      commit();
       //    2a. Alices publishes the new board
      A.publish(boardState);
      commit();

      B.only(() => {
        // 3. Bob accepets the wager and pays it before timing out
        interact.acceptWager(wager);
        });
      B.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));

        // 4. The intial state of the game is initialized with Alice's random board
        var state = boardInit(boardState);
        invariant(balance() == 2 * wager);
        
      // 5. While the game is not over (cat has not been blocked and not escaped) the game continues:
        while(!gameOver(state)){
          commit();
         A.only(() => {
          //5a. Alice gets a cat move and publishes it to the blockchain
           const catMove = getValidCatMove(interact, state); });
         A.publish(catMove);
         
         // 5b. The state of the board is updated with the new cat move
         const state2 = applyCatMove(state, catMove);
         commit();

         B.only(() => {
          // 5c. Bob get a block move and publishes it to the blockchain
          const blockMove = getValidBlockMove(interact, state2); });
        B.publish(blockMove);
        
        // 5d. The state of the board is updated with the new block move
        state = applyBlockerMove(state2, blockMove);
        continue;
        }
        // 6. Winner player gets payed two times the inital wager
        assert(catEscaped(state) || catBlocked(state));
        const [toA, toB] = (catEscaped(state) ? [2, 0] : [0, 2])
        transfer(toA * wager).to(A);
        transfer(toB * wager).to(B);
        commit();
      // 7. The outcome of the game is displayed to each of the players
      each([A, B], () => {
        interact.outcome(catEscaped(state)); });
      exit(); });
