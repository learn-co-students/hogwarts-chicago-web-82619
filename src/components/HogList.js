import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogList extends Component {

    render() {
        const hogs = this.props.hogs.map((hog, index) => <HogCard hog={hog} key={index} hideHog={this.props.hideHog} />)
        return <div className="ui cards">{hogs}</div>
    }
}