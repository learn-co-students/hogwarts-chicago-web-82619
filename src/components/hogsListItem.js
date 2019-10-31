import React, { Component } from 'react';



export default class HogsListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

  }




  showDetails = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const imgUrl = this.props.hog.name.toLowerCase().replace(/ /g,"_")
    const imgPath = `/hog-imgs/${imgUrl}.jpg`

    return (
      <div className="ui link card">
        <div className="image">
          <img src={imgPath}/>
        </div>

        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          <button className="ui button"onClick={this.showDetails}>Show Details </button>



            {this.state.show ?
              <div className="description">
              {this.props.hog.greased ? <p>Greased</p> : <p>Ungreased</p>}
            <p>specialty: {this.props.hog.specialty}</p>
            <p>weight: {this.props.hog.weight}</p>
            <p>{this.props.hog.specialty}</p>
            </div>
            : ""





        }
        </div>



      </div> )

  }



}
