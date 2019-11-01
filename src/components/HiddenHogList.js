import React, {Component} from 'react'
import HiddenHogCard from './HiddenHogCard'

export default class HiddenHogList extends Component {

    render() {
        const hogs = this.props.hogs.map((hog, index) => <HiddenHogCard hog={hog} key={index} hideHog={this.props.hideHog} />)
        return <div className="ui cards">{hogs}</div>
    }
}