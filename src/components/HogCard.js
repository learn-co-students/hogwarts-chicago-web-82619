import React, {Component} from 'react'

export default class HogCard extends Component {
    constructor() {
        super()
        this.state = {
            isShowing: false
        }
    }

    imgName = (name) => {
        const slug = name.toLowerCase().split(' ').join('_')
        const path = require(`../hog-imgs/${slug}.jpg`)
        return path
    }

    showInfo = () => {
        this.setState(prevState => {
            return {isShowing: !prevState.isShowing}
        })
    }

    removeHog = () => {
        this.props.hideHog(this.props.hog)
    }

    render() {
        return (
            <div className="pigTile">
                <img src={this.imgName(this.props.hog.name)} />
                <p className="hoggyText">{this.props.hog.name}</p>
                <p>{this.props.hog.specialty}</p>
                {this.state.isShowing === false 
                ? 
                    null
                    
                :
                    <div>
                        <p>{this.props.hog.greased ? "Greased" : "Nongreased"}</p>
                        <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
                        <p>Weight: {this.props.hog.weight}</p>
                    </div>
                }
                <div>
                    <button className="ui hover button" onClick={this.showInfo}>
                        {this.state.isShowing === false ? "More Info" : "Less Info"}
                    </button>
                    <button className="ui hover button" onClick={this.removeHog}>Hide Me 🐽</button>
                </div>
            </div>
        )
    }
}