import React, { Component } from 'react';
import './Hexagon.css';

class Hexagon extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let children = [];

    const cat = <img className="hexagon-cat" src="https://lh3.googleusercontent.com/proxy/mg_71XB98BSgN35s9BzdUyJALI5ZyFEeISi7b5eW59rdxzg_E_igKsVFcFKe45poFk89cHZvQS38t910VzKAM95Y" alt="cat" width="60" height="70"/>
    const rock = <img className="hexagon-rock" src="https://lh3.googleusercontent.com/proxy/S-ZcjLwlPADSb6hqi5QiGFhyldRQVjxfIQRtBQiow8ilKEvLbLfUyMFsPBI0NPZmVIVVBxxzdi1dIj8S87PtjQ-J" alt="rock_1" width="80" height="60"/>
    const tile = <img src="https://i.dlpng.com/static/png/5507096-hexagon-png-transparent-hexagonpng-images-dlpngcom-hexagon-transparent-background-400_461_preview.png" alt="tile" width="60" height="60"/>

    // Position Hexagon
    const hexagonPosition = {
      position: "absolute",
      width: "100px",
      height: "80px",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`
    }

    // Add children
    children.push(tile)
    if(this.props.cat){
      children.push(cat);
    }else if(this.props.rock){
      children.push(rock);
    }


    return (
      <div key={`hexagon${this.props.top}${this.props.left}`} style={hexagonPosition} onClick={() => this.props.callback(this.props.self,this.props.x*11+this.props.y)}>
          {children}
      </div>
    );
  }

}

export default Hexagon;
