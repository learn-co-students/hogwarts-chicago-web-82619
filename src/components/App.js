import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterBar from './FilterBar';
import PigList from './PigList';
import HiddenPigs from './HiddenPigs'

const formattedHogs = hogs.map(obj=> ({ ...obj, hidden: 'false' }))

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      hogs: formattedHogs,
      gifs: [],
      switch: 'false'
    }
  }

  handleChecked = (e) => {
    if(e.target.checked){
    let hogs = this.state.hogs.filter(hog => {
      if(hog.greased){
        return hog
      }
    })
    this.setState({hogs})
  } else {
    this.setState({hogs})
  }
}

handleChange = (e) => {
  if(e.target.value == 'name'){
    let hogs = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({hogs})
  } else {
    let hogs = this.state.hogs.sort((a, b) => (a.weight < b.weight) ? 1 : -1);
    this.setState({hogs})
  }
}

handleHiddenGifs = (e) => {
  this.setState({switch: !this.state.switch})
  console.log(this.state.switch)
}

componentDidMount(){
  var apikey = "HIQNHKMBB3Z0";
  var lmt = 50;
  var search_term = "bacon";
  var search_url = "https://api.tenor.com/v1/search?tag=" + search_term + "&key=" +
          apikey + "&limit=" + lmt;
  fetch(search_url)
  .then(res => res.json())
  .then(data => {
    let gifs = []
    let results = []
    data.results.forEach(result => {
      gifs.push(result.media[0].gif.url)
    })
    for(let i = 0; i < 13; i++){
      results.push(gifs[Math.floor(Math.random()*gifs.length)])
    }
    this.setState({gifs:results})
  })
}

handleHide = (e) => {
  e.preventDefault()
  const pigName = e.target.parentNode.querySelector('.hoggyText').innerHTML; 
  const hogsCopy = [...this.state.hogs]
  const newHog = hogsCopy.find(pig => {
    if (pig.name === pigName) {
      return pig.hidden = true
    }
  })
  
  this.setState({
    hogs: hogsCopy
  })
}

  render() {
    return (
      <div className="App">
          < Nav />
          < FilterBar handleChecked={this.handleChecked} handleChange={this.handleChange} handleHiddenGifs={this.handleHiddenGifs}/>
          {!this.state.switch ? 
          < HiddenPigs hogs={this.state.hogs} gifs={this.state.gifs}/>
          :
          < PigList handleHide={this.handleHide} hogs={this.state.hogs}/>
          }
      </div>
    )
  }
}

export default App;
