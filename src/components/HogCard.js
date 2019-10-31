import React from 'react';

export default class HogCard extends React.Component{

  constructor() {
    super()

    this.state = {
      infoClicked: false,
      display: 'block'
    }
  }

  handleClickInfo = () => {
    this.setState(previousState => {
      return {
        infoClicked: !previousState.infoClicked
      } 
    })
  }

  handleClickHide = () => {
    this.setState({
        display: 'none'
    })
  }

  render() {
    return (
      <div className="ui card" style={{display: this.state.display}}>
        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
          <div className="description">Specialty: {this.props.hog.specialty}</div>
          {this.state.infoClicked && <div className="description">
            <ul>
              {this.props.hog.greased && <li>Greased</li>}
              <li>Weight: {this.props.hog.weight}</li>
              <li>Highest medal achieved: {this.props.hog['highest medal achieved']}</li>
            </ul>
          </div>}
          <div className="ui primary button" onClick={this.handleClickInfo}>More Info</div>
          <div className="ui secondary button" onClick={this.handleClickHide}>Hide me!</div>
        </div>
      </div>
    )
  }
}