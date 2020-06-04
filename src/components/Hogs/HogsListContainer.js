import React, { Component } from 'react'
import HogsList from './HogsList'

export class HogsListContainer extends Component {
  render() {
    return (
      <div>
       <HogsList hogs={this.props.hogs} />
      </div>
    )
  }
}

export default HogsListContainer
