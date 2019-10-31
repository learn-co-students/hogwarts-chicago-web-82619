import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  updateHogs(sorted) {
    this.props.updateHogs(sorted)
  }

  sortByName = () => {
    this.props.hogs.sort((a, b) => a.name.localeCompare(b.name))
    this.updateHogs()
  }

  sortByWeight = () => {
    this.props.hogs.sort((a, b) => b.weight - a.weight)
    this.updateHogs()
  }
  
  filterGreased = () => {
    if(!this.state.checked) {
      this.setState({checked: true})
      const greased = this.props.hogs.filter((hog) => hog.greased === true)
      this.updateHogs(greased)
    } else {
      this.setState({checked: false})
      this.updateHogs(undefined)
    }
  }
 

  render(){
    return(
      <div className="ui pointing menu">
      
        <div className="ui simple dropdown item" style={{marginRight:'20px'}}>
          Sort by
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item" onClick={this.sortByName}>Name</div>
            <div className="item" onClick={this.sortByWeight}>Weight</div>
          </div>
        </div>

        <div class="ui checkbox menu" style={{padding:'10px'}}>
          <input type="checkbox" name="greased" onChange={this.filterGreased}/>
          <label>Greased?</label>
        </div>

        <div className="ui teal basic button right menu">Hidden Hogs</div>
      </div>
    )
  }
}