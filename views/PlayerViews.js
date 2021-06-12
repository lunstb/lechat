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
exports.Done = class extends React.Component {
  render() {
    const {outcome, winAmt} = this.props;
    return (
      <div>
        Thank you for playing. {outcome} won {winAmt} algos
        <br />
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