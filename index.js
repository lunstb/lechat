import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ALGO'

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount(){
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        try{
            const faucet = await reach.getFaucet();
            this.setState({view: 'FundAccount', faucet});
        } catch(e){
            this.setState({view: 'DeployerOrAttacher'})
        }
    }

    async fundAccount(fundAmount) {
        await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
      }
      async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }

      selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
      selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }

    render() { return renderView(this, AppViews); }

}

class Player extends React.Component {
    random() { return reach.hasRandom.random(); }
    // async getHand() { // Fun([], UInt)
    //   const hand = await new Promise(resolveHandP => {
    //     this.setState({view: 'GetHand', playable: true, resolveHandP});
    //   });
    //   this.setState({view: 'WaitingForResults', hand});
    //   return handToInt[hand];
    // }
    doneState(boardArray) { this.setState({view: 'Done', outcome: boardArray}); }
    informTimeout() { this.setState({view: 'Timeout'}); }
    //playHand(hand) { this.state.resolveHandP(hand); }
  }

  class Deployer extends Player {
    constructor(props) {
      super(props);
      this.state = {view: 'SetWager'};

      this.playMove = this.playMove.bind(this);
    }
    setWager(wager) { this.setState({view: 'Deploy', wager}); }
    async deploy() {
      const ctc = this.props.acc.deploy(backend);
      this.setState({view: 'Deploying', ctc});
      this.setWager = reach.parseCurrency(this.state.wager); // UInt
      backend.Alice(ctc, this);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    //gets the move of the cat
    async getMove(boardArray){
      const move = await new Promise(resolveMove => {
        this.setState({view: 'GetMove', playable: true, boardArray, resolveMove});
      });
      this.setState({view: 'WaitingForResults', move});
      return move;
    }

    playMove(self,move) {
      console.log(self)
      this.state.resolveMove(move)
    };
    render() { return renderView(this, DeployerViews); }
  }
  

  class Attacher extends Player {
    constructor(props) {
      super(props);
      this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
      const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
      this.setState({view: 'Attaching'});
      backend.Bob(ctc, this);
    }
    async acceptWager(wagerAtomic) { // Fun([UInt], Null)
      const wager = reach.formatCurrency(wagerAtomic, 4);
      return await new Promise(resolveAcceptedP => {
        this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
      });
    }
    termsAccepted() {
      this.state.resolveAcceptedP();
      this.setState({view: 'WaitingForTurn'});
    }

    //gets the hex of the blocker
    async getHex(boardArray){
      const hex = await new Promise(resolveHex => {
        this.setState({view: 'GetHex', playable: true, boardArray, resolveHex});
      });
      this.setState({view: 'WaitingForResults', hex});
      return hex;
    }
    playHex(hex) {this.state.resolveHex(hex)};


    render() { return renderView(this, AttacherViews); }
  }

  renderDOM(<App />);
  
  