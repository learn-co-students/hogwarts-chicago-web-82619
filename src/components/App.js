import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogsList from './HogsList';

import Filter from './Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      onlyGreased: false,
      sort: 'noSort',
    };
    this.showDetails = this.showDetails.bind(this);
    this.toggleGreased = this.toggleGreased.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  showDetails(name) {
    const newHogs = this.state.hogs.map((hog) => {
      if (hog.name === name) hog.showDetails = !hog.showDetails;
      return hog;
    });
    this.setState({
      hogs: newHogs,
    });
  }

  toggleGreased() {
    this.setState((prevState) => ({
      onlyGreased: !prevState.onlyGreased,
    }));
  }

  handleSort(e) {
    this.setState({
      sort: e.target.value,
    });
  }

  handleHide(name) {
    const newHogs = this.state.hogs.map((hog) => {
      if (hog.name === name) {
        hog.hide = true;
      }
      return hog;
    });

    this.setState({
      hogs: newHogs,
    });
  }

  render() {
    console.log(this.state.sort);
    let displayedHogs = [...this.state.hogs];

    if (this.state.onlyGreased) {
      displayedHogs = displayedHogs.filter((hog) => hog.greased);
    }

    if (this.state.sort === 'weight') {
      displayedHogs = displayedHogs.sort((a, b) => a.weight - b.weight);
    } else if (this.state.sort === 'name') {
      displayedHogs = displayedHogs.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    }

    displayedHogs = displayedHogs.filter((hog) => !hog.hide);

    return (
      <div className="App">
        <Nav />
        <Filter
          toggleGreased={this.toggleGreased}
          onlyGreased={this.state.onlyGreased}
          handleSort={this.handleSort}
        />
        <HogsList
          hogs={displayedHogs}
          showDetails={this.showDetails}
          handleHide={this.handleHide}
        />
      </div>
    );
  }
}

export default App;
