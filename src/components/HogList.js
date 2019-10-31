import React from 'react';
import HogCard from './HogCard.js'

export default class HogList extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const hogsData = this.props.hogs.map((hogData, index) => {
      return <HogCard hog={hogData} key={index} />
    })
    return(
      <div className="ui cards center aligned page grid">{hogsData}</div>
    )
  }
}