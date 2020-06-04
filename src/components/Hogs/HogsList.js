import React, { Component } from 'react';
import Hog from './Hog';

export class HogsList extends Component {

  render() {
    return <div className="indexWrapper">{this.props.hogs.map((hog, idx) => {
        return <Hog key={idx} hog={hog}/>
      })}</div>;
  }
}

export default HogsList;
