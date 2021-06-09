import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Bob)</h2>
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
    console.log(`Board Array: ${boardArray}`);
    console.log(`Hex: ${hex}`);
    return (
      <div>
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHex(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(5)}
        >5</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(6)}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(7)}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(8)}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(9)}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(10)}
        >10</button>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHex(20)}
        >20</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(30)}
        >30</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(40)}
        >40</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(50)}
        >50</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(60)}
        >60</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(70)}
        >70</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(80)}
        >80</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(90)}
        >90</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHex(100)}
        >100</button>
      </div>
    );
  }
}


export default exports;