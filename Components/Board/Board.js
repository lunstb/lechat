import React, { Component } from 'react';
import Hexagon from '../Hexagon/Hexagon';
import "./Board.css";

class Board extends Component {


  render() {
    let board = [];

    const OFFSET_X = 20;
    const OFFSET_Y = 20;
    console.log(this.props.rocks+" "+this.props.catX+" "+this.props.catY)
    for(let i = 0; i<11; ++i){
      for(let j = 0; j<11; ++j){
        let tmp = <Hexagon 
          cat={(this.props.catX===i)&&(this.props.catY===j)} 
          rock={(this.props.rocks[i*11+j])}
          top={OFFSET_Y+45*(i)} 
          left={OFFSET_X+59*(j+i%2/2)}
          callback={this.props.callback}
          self = {this.props.self}
          x={i}
          y={j}
        />
        board.push(tmp);
      }
    }

    return (
      <div>
          <p>Board</p>
          <div className="board-container">
            {board}
          </div>
      </div>
    );
  }

}

export default Board;
