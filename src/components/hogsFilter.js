import React, { Component} from 'react'
import { Fragment } from 'react'


export default class HogsFilter extends Component {

  constructor(props) {
    super(props)

  }

  toggleGrease = () => {
    this.props.handleFilter({
      filterGrease: !this.props.filterGrease
    })

  }

  changeSort = (event) => {
    const input = event.target.value
    this.props.handleFilter({
      type: input
    })
  }

  render() {

    return (
      <div>

      <select onChange={this.changeSort}>
        <option value='name'>Name </option>
        <option value='weight'>Weight </option>
      </select>
      <button onClick={this.toggleGrease} className={`ui ${this.props.filterGrease? "pink ":""}button`} > filter Greased </button>
      </div>
    )



  }



}
