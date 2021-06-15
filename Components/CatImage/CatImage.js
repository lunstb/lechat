import React, { Component } from 'react';
import './CatImage.css';
import catImg from '../../images/cat.gif'

class CatImage extends Component {
  

  render() {

    return (
      <div className="cat-image">
          <img src={catImg} alt="cat" width="155" height="145"/>
      </div>
    );
  }

}

export default CatImage;
