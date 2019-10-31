import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: [],
      filters: {
        type: 'all'
      }
    }
  }
   
  componentDidMount() {
    this.setState({
      hogs: hogs
    })
  }
  
  render() {
    return (
      <div className="App">
          <Nav />
          <HogContainer hogs={hogs}/>

      </div>
    )
  }
}

export default App;
