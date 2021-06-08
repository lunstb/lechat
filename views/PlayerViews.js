import React from 'react';

const exports = {};

function renderState(st){
  let visual = '\n';
  let cnt = 0;
  for(let i = 0; i < 11; i++){
     if(i % 2 === 1){
       visual += ' ';
     }
    for(let j = 0; j < 11; j++){

      //st.blockers[cnt] || randomArray.includes(cnt)
     if(st.blockers[cnt]){
       visual += 'b'
     }
     else if(cnt === st.catIndex){
       visual += 'c'
     }
     else{
       visual += 'o'
     }
     cnt++;
    }
    visual += '\n'
  }
  return visual;
 }

//displays the final outcome of the game. TODO - needs to say who won and who lost
exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{renderState(outcome) || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;