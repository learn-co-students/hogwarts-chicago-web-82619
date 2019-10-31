import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsFilter from './hogsFilter.js'

import HogsList from './hogsList.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      sortby: 'name',
      filterGrease: false
    }

  }

  handleFilter = ({filterGrease, type}) => {
    const newState = {}

    if (filterGrease != undefined) {
    newState.filterGrease = filterGrease }

    if (type) {
    newState.sortby = type }
    console.log(newState)
      this.setState(newState)
  }


  render() {
    let hogsData = this.state.hogs
    if (this.state.filterGrease) {
      hogsData = hogsData.filter(hog => hog.greased)
    }

    hogsData.sort( (hogA, hogB) => {

      if (hogA[this.state.sortby] < hogB[this.state.sortby]) { return -1}
      if (hogA[this.state.sortby] > hogB[this.state.sortby]) { return 1}
      else {return 0}
    })

    return (
      <div className="App">
          < Nav />
        < HogsFilter handleFilter={this.handleFilter} filterGrease={this.state.filterGrease} sortType={this.state.sortby} />
        <main>
          <HogsList hogs={hogsData}/>
        </main>

      </div>
    )
  }
}

export default App;
