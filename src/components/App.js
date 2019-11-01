import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './HogList';
import Filter from './Filter';
import HiddenHogList from './HiddenHogList';

class App extends Component {
  constructor() {
    super()
    const sortedHogs = hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.state = {
      hogs: sortedHogs,
      hiddenHogs: [],
      hidden: false
    }
  }

  hideHog = (selectedHog) => {
    const newHogs = this.state.hogs.filter(hog => selectedHog !== hog);
    const newHiddenHogs = this.state.hiddenHogs;
    newHiddenHogs.push(selectedHog);
    this.setState({
      hogs: newHogs,
      hiddenHogs: newHiddenHogs,
      sortValue: 'name'
    })
  }

  sortByName = (sortValue) => {
    const sortedHogs = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: sortedHogs,
      sortValue: sortValue
    })
  }

  sortByWeight = (sortValue) => {
    const sortedHogs = this.state.hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    this.setState({
      hogs: sortedHogs,
      sortValue: sortValue
    })
  }

  filterGrease = (checked) => {
    if(checked === true) {
      const filtered = this.state.hogs.filter(hog => hog.greased)
      this.setState({
        hogs: filtered
      })
    } else {
      if(this.state.sortValue === "weight") {
        this.sortedHogs = hogs.sort((a,b) => {
          return a.weight - b.weight
        })
      } else {
        this.sortedHogs = hogs.sort((a,b) => {
          return a.name > b.name ? 1 : -1
        })
      }
      this.setState({
        hogs: this.sortedHogs
      })
    }
  }

  toggleHidden = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden}
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter sortByName={this.sortByName} sortByWeight={this.sortByWeight} filterGrease={this.filterGrease} toggleHidden={this.toggleHidden} />
          { 
            this.state.hidden === false 
            ?
            <HogList hogs={this.state.hogs} hideHog={this.hideHog} />
            :
            <HiddenHogList hogs={this.state.hiddenHogs} />
          }
      </div>
    );
  }
}

export default App;
