import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Deployer (Alice)</h2>
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >Set wager</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

//todo, modify this. Beautiful code below imo
exports.GetMove = class extends React.Component {
  render() {
    const {parent, playable, boardArray, move} = this.props;
    console.log(`Board Array: ${boardArray.blockers}`);
    console.log(`Move: ${move}`);
    return (
      <div>
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playMove(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(5)}
        >5</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(6)}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(7)}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(8)}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(9)}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(10)}
        >10</button>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playMove(20)}
        >20</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(30)}
        >30</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(40)}
        >40</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(50)}
        >50</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(60)}
        >60</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(70)}
        >70</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(80)}
        >80</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(90)}
        >90</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMove(100)}
        >100</button>
      </div>
    );
  }
}

export default exports;