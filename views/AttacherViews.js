import React from 'react';
import Board from '../Components/Board/Board';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Blocker)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellcheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {wager, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Wager: {wager} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept terms and pay wager</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the other player...
        <br />Think about which move you want to play.
      </div>
    );
  }
}


//todo, modify this. Beautiful code below imo
exports.GetHex = class extends React.Component {
  render() {
    const {parent, playable, boardArray, hex} = this.props;
    console.log(`Board Array: ${boardArray.blockers} ${boardArray.catIndex}`);
    console.log(`Hex: ${hex}`);
    return (
      <div>
        {!playable ? 'Please wait...' : ''}
        <br />
        <Board
          rocks = {boardArray.blockers}
          callback = {parent.playHex}
          self = {parent}
          isCat = {false}
          catX = {boardArray.catIndex%11}
          catY = {Math.floor(boardArray.catIndex/11)}
        />
      </div>
    );
  }
}


export default exports;