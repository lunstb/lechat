import React from 'react';
import catOrangeJustice from '../images/catOrangeJustice.gif'
import rockDance from '../images/rockDance.gif'

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

// This displays the outcome of the game.
//maybe display a funny cat gif if Alice wins from https://cuttyanimalss.blogspot.com/2020/04/animated-black-cat-gif-transparent.html. orange justice cat
exports.Done = class extends React.Component {
  render() {
    const {catEscaped, winAmt} = this.props;
    const images = [rockDance, catOrangeJustice];
    const boolToOutcome = ['Bob the blocker ', 'Alice the cat '];
    return (
      <div>
        Thank you for playing. {boolToOutcome[+catEscaped]} won {winAmt} algos
        <br />
        <img src= {images[+catEscaped]} alt="Trulli"></img>
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;