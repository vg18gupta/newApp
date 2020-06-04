import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGeoData } from "../actions/getData";
import Background from './background'

const bkgi = {
    minHeight: "100%",
    minWidth:"1024px",
    width: "100%",
    height:" auto",
    position: "fixed",
    top:0,
    left:0,
    zIndex: -1,
};



class Weatherdata extends Component {


  componentWillMount() {
    this.props.fetchGeoData();
  }

  render() {

    return (
      <div >
        <div style={bkgi}>
        <Background  />
        </div>
          <div>
            {this.renderLocation()}
            {this.renderTemp()}
            {this.renderWeather()}

          </div>
      </div>
    )

  }



  renderLocation() {
    if (!this.props.geoData || !this.props.geoData.weather) {
      return null;
    } else {
      return (
        <div>
          <h1>{this.props.geoData.weather.name}, {this.props.geoData.weather.sys.country}</h1>
        </div>
      )
    }
  }

  renderTemp() {
    if (!this.props.geoData || !this.props.geoData.weather) {
      return null;
    } else {
      return (
        <div>
          <h1>
            The Current Temperature in {this.props.geoData.weather.name} is {this.props.geoData.weather.main.temp} Kalvin
          </h1>
        </div>
      )
    }
  }

  renderWeather() {
    if (!this.props.geoData || !this.props.geoData.weather) {
      return null;
    } else {
      return (
        <div>
          <h1>
            The Weather is {this.props.geoData.weather.weather[0].description}
          </h1>
        </div>
      )
    }
  }

 weatherId(){
    if (!this.props.geoData || !this.props.geoData.weather) {
      return null;
    } else {
      return (
        <div>
          <h1>
             {this.props.geoData.weather.weather[0].id}
          </h1>
        </div>
      )
    }
  }

}




const mapStateToProps = state => {
  console.log("STATE:", state);
  return {
    geoData: state.geoData
  };
};

export default connect(mapStateToProps, { fetchGeoData })(Weatherdata);
