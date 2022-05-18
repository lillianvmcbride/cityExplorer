/**
 * @file App.js
 * @Author Lillian McBride
 */

import "./App.css";
import React from "react";
import axios from "axios";
import Header from"./Header";
import Input from "./Input";
import Map from "./Map";
import Errors from "./Errors";
// import {Container, Col, Row} from "react-bootstrap";

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    error : null, 
    searchQuery: "",
    location: {place_id: null, display_name: "", lat:"", lon:""},
  };
}

handleChange = (location) => {
  this.setState({searchQuery: location}, this.getLocation);
  console.log(`app.handleChange() location = ${location}`);

}

// https://us1.locationiq.com/v1/search.php?key=pk.2ebc33dc0285c513f1933d0237377cba&q=seattle&format=json

getLocation = async () => {
  let searchQuery = this.state.searchQuery;
  const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;
  console.log(`App.getLocation() API = ${API}`);
  await axios.get(API)
    .then ( (res) => this.setState({ location: res.data[0], error : null }))
    .catch( (res) => {
      this.state.error = res;
      this.setState ({error : res});
      console.log(`getLocation error`);
  });
};

render() {
  return (
    <div className="App">
       <Header header="City Explorer"/>
       <Input handleChange = {this.handleChange}/>
      {this.state.location.place_id && 
        <><h2>Location is: {this.state.location.display_name}</h2><h2>Latitude is: {this.state.location.lat}</h2><h2>Longitude is: {this.state.location.lon}</h2>
        <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`} 
        city={this.state.location.display_name}
        />
        </>
      }
      {this.state.error && 
      <Errors errorMessage = {this.state.error}/>}
    </div>
  );
}
}

export default App;
