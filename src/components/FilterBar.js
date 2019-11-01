import React from 'react';

class FilterBar extends React.Component {

  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='filterWrapper indexWrapper' style={{display:'inline-flex'}}>
        <div className='sort'>
        Sort by
        <select onChange={this.props.handleChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        </div>
        <div>
          Greased Pigs Only?
          <input type="checkbox" onClick={event=>this.props.handleChecked(event)}></input>
          <button className='hidden-btn' onClick={this.props.handleHiddenGifs}>Hidden Hogs</button>
        </div>
      </div>    
    )
  }
}

export default FilterBar;