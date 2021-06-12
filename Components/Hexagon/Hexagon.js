import React, { Component } from 'react';
import './Hexagon.css';

class Hexagon extends Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    let children = [];

    const cat = <img className="hexagon-cat" src="https://i.giphy.com/media/piXMiISN73f0wfbRqr/source.gif" alt="cat" width="65" height="65"/>
    const rock = <img className="hexagon-rock" src="http://assets.stickpng.com/images/580b585b2edbce24c47b26f6.png" alt="rock_1" width="80" height="60"/>
    const tile = <img src="https://i.dlpng.com/static/png/5507096-hexagon-png-transparent-hexagonpng-images-dlpngcom-hexagon-transparent-background-400_461_preview.png" alt="tile" width="60" height="60"/>

    // Position Hexagon
    const hexagonPosition = {
      position: "absolute",
      width: "100px",
      height: "80px",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`
    }

    let canClick = true;

    if(this.props.cat || this.props.rock)
      canClick = false;

    let catIndex = this.props.catX + this.props.catY*11;
    let blockIndex = this.props.x + this.props.y*11;
    if(this.props.isCat){
      if(!(catIndex === blockIndex - 1 || catIndex - 1 === blockIndex ||
        catIndex - 11 === blockIndex || catIndex - 10 === blockIndex ||
        catIndex  === blockIndex - 11 || catIndex === blockIndex - 12)){
        canClick = false;
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
      <div key={`hexagon${this.props.top}${this.props.left}`} style={hexagonPosition} onClick={canClick?() => this.props.callback(this.props.self,this.props.x+this.props.y*11):()=>alert("You can't move there")}>
          {children}
      </div>
    );
  }

}

export default Hexagon;
