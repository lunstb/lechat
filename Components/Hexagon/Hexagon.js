import React, { Component } from 'react';
import './Hexagon.css';
import hexagonImg from '../../images/hexagon.png'
import hexagonMovable from '../../images/hexagon-green.png'
import hexagonMovableHover from '../../images/hexagon-green-hover.png'
import hexagonNotMovableHover from '../../images/hexagon-red.png'
import rockImg from '../../images/rock_1.png'
import catImg from '../../images/cat.gif'

class Hexagon extends Component {
  constructor(props) {
    super(props)

    this.onEnterHover = this.onEnterHover.bind(this);
    this.onLeaveHover = this.onLeaveHover.bind(this);

    this.isOpen = this.isOpen.bind(this)
    this.isAdjacent = this.isAdjacent.bind(this)

    // Set initial state of the block with correct color
    let tmpHexagon

    if(this.isOpen() && this.isAdjacent()){
      tmpHexagon = hexagonMovable
    }else if(!this.isOpen() && this.isAdjacent()){
      tmpHexagon = hexagonNotMovableHover
    }else{
      tmpHexagon = hexagonImg
    }

    this.state = {
      hexagon: tmpHexagon
    }
  }

  
  onEnterHover(){
    console.log("enter")
    
    let tmpHexagon

    if(this.isOpen()){
      tmpHexagon = hexagonMovableHover
    }else{
      tmpHexagon = hexagonNotMovableHover
    }

    this.setState({
      hexagon: tmpHexagon
    })
  }

  onLeaveHover(){
    //onsole.log("leave")

    let tmpHexagon

    if(this.isOpen() && this.isAdjacent()){
      tmpHexagon = hexagonMovable
      console.log("open and adjacent")
    }else if(!this.isOpen() && this.isAdjacent()){
      tmpHexagon = hexagonNotMovableHover
      console.log("open not adjacent")
    }else{
      tmpHexagon = hexagonImg
      console.log("neither")
    }

    this.setState({
      hexagon: tmpHexagon
    })
    console.log(this.state.hexagon,tmpHexagon)
  }

  isOpen(){
    if(this.props.cat || this.props.rock)
      return false;
    return true
  }

  isAdjacent(){
    if(!this.props.isCat)
      return true

    let catIndex = this.props.catX + this.props.catY*11;
    let blockIndex = this.props.x + this.props.y*11;
    let offset = this.props.y % 2;
    let otherOffset = (offset + 1)%2;
    if(!(catIndex === blockIndex - 1 || catIndex - 1 === blockIndex ||
      catIndex - 11 - offset=== blockIndex || catIndex - 10 - offset === blockIndex ||
      catIndex  === blockIndex - 10 - otherOffset|| catIndex === blockIndex - 11 - otherOffset)){
        return false
    }
    return true
  }

  render() {
    let children = [];

    

    // Position Hexagon
    const hexagonPosition = {
      position: "absolute",
      width: "100px",
      height: "80px",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`
    }

    let reason = "";
    
    let open = this.isOpen()
    if (!open)
      reason = "something else is already there."
    let adjacent = this.isAdjacent()
    if (!adjacent)
      reason = "it is not an adjacent cat tile"

    const canClick = open && adjacent

    const cat = <img 
        key={`cat${this.props.top}${this.props.left}`}
        className="hexagon-cat" src={catImg} alt="cat" width="65" height="65"
      />
    const rock = <img 
        key={`rock${this.props.top}${this.props.left}`}
        className="hexagon-rock" src={rockImg} alt="rock_1" width="55" height="45"
      />
    const tile = <img 
        key={`tile${this.props.top}${this.props.left}`} 
        onMouseOver={() => this.onEnterHover()} 
        onMouseLeave={() => this.onLeaveHover()} 
        onClick={canClick?() => this.props.callback(this.props.self,this.props.x+this.props.y*11):()=>alert(`You can't move there because ${reason}`)} 
        src={this.state.hexagon} alt="tile" width="60" height="60"
      />

    // Add children
    children.push(tile)
    if(this.props.cat){
      children.push(cat);
    }else if(this.props.rock){
      children.push(rock);
    }


    return (
      <div key={`hexagon${this.props.top}${this.props.left}`} style={hexagonPosition}>
          {children}
      </div>
    );
  }

}

export default Hexagon;
