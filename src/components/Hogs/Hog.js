import React, { Component } from 'react';

export class Hog extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  }

  render() {
    console.log(this.state.showDetails);

    const {
      greased,
      name,
      specialty,
      weight,
      'highest medal achieved': medal,
    } = this.props.hog;

    let imgName = name.toLowerCase().split(' ').join('_');
    let pigImg = require(`../../hog-imgs/${imgName}.jpg`);
    
    return (
      <div key={name} className="pigTile" onClick={this.handleClick}>
        <h3 className="hoggyText">{name}</h3>
        <img src={pigImg} alt={name} />
        {this.state.showDetails ? (
          <ul className="normalText">
            <p>Greased: {greased ? 'Yes' : 'No'}</p>
            <p>Specialty: {specialty}</p>
            <p className="achievementText">Highest Medal Achieved: {medal}</p>
            <p>Weight: {weight}</p>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Hog;
