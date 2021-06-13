import React, { Component } from 'react';
import './Hexagon.css';
import hexagonImg from '../../images/hexagon.png'
import rockImg from '../../images/rock_1.png'
import catImg from '../../images/cat.gif'

class Hexagon extends Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    let children = [];

    const cat = <img className="hexagon-cat" src={catImg} alt="cat" width="65" height="65"/>
    const rock = <img className="hexagon-rock" src={rockImg} alt="rock_1" width="55" height="45"/>
    const tile = <img src={hexagonImg} alt="tile" width="60" height="60"/>

    // Position Hexagon
    const hexagonPosition = {
      position: "absolute",
      width: "100px",
      height: "80px",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`
    }

    let canClick = true;
    let reason = "";
    if(this.props.cat || this.props.rock){
      canClick = false;
      reason = "something else is already there."
    }
      

    let catIndex = this.props.catX + this.props.catY*11;
    let blockIndex = this.props.x + this.props.y*11;
    let offset = this.props.y % 2;
    let otherOffset = (offset + 1)%2;
    if(this.props.isCat){
      if(!(catIndex === blockIndex - 1 || catIndex - 1 === blockIndex ||
        catIndex - 11 - offset=== blockIndex || catIndex - 10 - offset === blockIndex ||
        catIndex  === blockIndex - 10 - otherOffset|| catIndex === blockIndex - 11 - otherOffset)){
        canClick = false;
        reason = "it is not an adjacent cat tile"
      }
    }

    // Add children
    children.push(tile)
    if(this.props.cat){
      children.push(cat);
    }else if(this.props.rock){
      children.push(rock);
    }


    return (
      <div key={`hexagon${this.props.top}${this.props.left}`} style={hexagonPosition} onClick={canClick?() => this.props.callback(this.props.self,this.props.x+this.props.y*11):()=>alert(`You can't move there because ${reason}`)}>
          {children}
      </div>
    );
  }

}

export default Hexagon;
