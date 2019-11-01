import React from 'react';

class PigCard extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {
        display: 'none'
        // displayCard: ''
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    if(this.state.display==='none'){
        this.setState({
            display: ''
        })
    } else {
        this.setState({
            display: 'none'
        })
    }
    
  }

  

  render() {

    return(
      <div>
      {!this.props.hog.hidden ? '' : 
      <div className='pigTile' style={{display:this.state.displayCard}} name={this.props.hog.name}>
        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="file not found"/>
        <h3 className='hoggyText'>{ this.props.hog.name }</h3>
        <div className='achievementText'>Highest Medal: {this.props.hog['highest medal achieved']}</div>
        <div style={{display:this.state.display}}>
          <div>{this.props.hog.specialty}</div>
          <div>{this.props.hog.weight}</div>
        </div>
        <button onClick={this.handleClick}>Detail</button>
        <button onClick={this.props.handleHide}>Hide</button>
      </div>
      }
      </div>
      
    )
  }
}

export default PigCard;

