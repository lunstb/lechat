import React from 'react';

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
    const images = ["https://i1.wp.com/www.jeffreythompson.org/blog/wp-content/uploads/2010/07/EB28.gif?ssl=1", "https://media.giphy.com/media/1zRf1FsIIvtFO0PS7U/giphy.gif"];
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