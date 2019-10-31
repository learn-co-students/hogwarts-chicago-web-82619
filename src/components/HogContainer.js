import React from 'react';
import Filter from './Filter.js';
import HogList from './HogList.js';

export default class HogContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      sortedHogs: undefined
    }
  }


  updateHogs = (Hogs) => {
    console.log(Hogs)
    this.setState({sortedHogs: Hogs})
  }
  
  render() {
    return (
      <div>
        <div className="row" style={{margin:'50px'}}><Filter hogs={this.props.hogs} updateHogs={this.updateHogs}/></div>
        <div className="row">
            {this.state.sortedHogs ? <HogList hogs={this.state.sortedHogs}/> : <HogList hogs={this.props.hogs}/>}
        </div>
      </div>
    )
  }
}