import React, {Component} from 'react'

export default class Filter extends Component {

    filterHogs = (event) => {
        event.target.value === "name" ? this.props.sortByName(event.target.value) : this.props.sortByWeight(event.target.value);
    }

    isChecked = (event) => {
        this.props.filterGrease(event.target.checked)
    }

    handleHidden = () => {
        this.props.toggleHidden()
    }

    render() {
        return (
            <div className="filterWrapper ui menu">
                <label className="item" for="select">Sort By: </label>
                <select className="item" name="select" onChange={this.filterHogs}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <label className="item" for="check">Greased Pigs Only: </label>
                <input className="item" type="checkbox" name="check" onChange={this.isChecked}></input>
                <div className="right menu">
                    <button className="item" onClick={this.handleHidden}>Hidden Hogs</button>
                </div>
            </div>
        )
    }
}