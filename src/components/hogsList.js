import React, { Component } from 'react';
import HogsListItem from './hogsListItem.js'

export default class HogsList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let counter = 0



    const hogsItems = this.props.hogs.map( (hog) => {
      return <HogsListItem hog={hog} id={counter} key={counter++} />})
    return (
    <div className="hogsList ui cards">
      {hogsItems}
    </div>
    )
  }



}
