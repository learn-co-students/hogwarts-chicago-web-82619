import React, {Component} from 'react'

export default class HiddenHogCard extends Component {
    constructor() {
        super()
        this.state = {
            isShowing: false
        }
    }

    render() {
        return (
            <div className="pigTile">
                <img src="https://media2.giphy.com/media/11WLg6RNVZ6Hxm/giphy.gif" />
                <p className="hoggyText">R.I.P {this.props.hog.name}</p>
            </div>
        )
    }
}