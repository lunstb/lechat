'reach 0.1';

//board dimensions
const ROWS = 11;
const COLS = 11;
const CELLS = ROWS * COLS;

//true if spot is not available, false otherwise
const Board = Array(Bool, CELLS);

//the board will be empty at the start
const boardAtStart = Array.replicate(121, false);

//need to change this function
const winner = (coinA, coinB) =>
      (coinA + coinB);

//the player object
const Player =
      { ...hasRandom,
        getCoin: Fun([], UInt),
        seeOutcome: Fun([UInt], Null),
        informTimeout: Fun([], Null) };

//Alice the cat
const Alice =
      { ...Player,
        wager: UInt };

//Bob the blocker
const Bob =
      { ...Player,
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
        const wager = declassify(interact.wager); });
      A.publish(wager)
        .pay(wager);
      commit();

      B.only(() => {
        interact.acceptWager(wager); });
      B.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));

        commit();

        A.only(() => {
          const _coinA = interact.getCoin();
          const [_commitA, _saltA] = makeCommitment(interact, _coinA);
          const commitA = declassify(_commitA); });
        A.publish(commitA)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        commit();

        unknowable(B, A(_coinA, _saltA));
        B.only(() => {
          const coinB = declassify(interact.getCoin()); });
        B.publish(coinB)
          .timeout(DEADLINE, () => closeTo(A, informTimeout));
        commit();

        A.only(() => {
          const [saltA, coinA] = declassify([_saltA, _coinA]); });
        A.publish(saltA, coinA)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        checkCommitment(commitA, saltA, coinA);

        const outcome = winner(coinA, coinB);
 

      // transfering based on an arbituary rule
      if(outcome > 100){
        transfer(2 * wager).to(A);
      }
      else{
        transfer(2 * wager).to(B);
      }
      
      commit();

      //displaying the outcome to both players
      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });