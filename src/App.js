/**
 * @file App.js
 * @Author Lillian McBride
 */

import "./App.css";
import React from "react";
// import axios from "axios";
// import Header from"./Header";
import Input from "./Input";
// import Map from "./Map";
import Errors from "./Errors";
import DataDisplay from "./DataDisplay";
// // import {Container, Col, Row} from "react-bootstrap";

class App extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    error : null, 
    searchQuery: "",
    location: {place_id: null, display_name: "", lat:"", lon:""},
    data : null,
  };
}


// handleChange = (location) => {
//   this.setState({searchQuery: location}, this.getLocation);
// }


// componentDidMount() {
//   if (this.state.location !== null) {
//     this.callBackendAPI(this.state.location)
//       .then((res) => {
//         this.setState({ data: res.express });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

/*
* @param {string} city - the name of a city
* @returns {object} - the JSON object with the data
*/
callBackEndAPI = async (location) => {
 const response = await fetch("http://localhost:5000/weather?searchQuery=" + location);
 const body = await response.json();
 // Make sure things worked!
 if (response.status !== 200) {
   throw Errors(body.message);
 }
 return body;
};

/*
* @param {string} city - the clity to look for
*/
handleSearch = async (location) => {
 console.log(`App.handleSearch() location: ${location}`);
 this.setState({ location: location });
 this.callBackEndAPI(location)
   .then((res) => {
     console.log(res.express);
     this.setState({ data: res.express });
   })
   .catch((err) => {
     console.log(err);
   });
 console.log(`App.handleSearch() results: ${this.state.data}`);
};

render() {
  console.log("app render " + JSON.stringify(this.state.data));
 return (
   <div className="App">
     <header>
       <h1 className="h1">City Explorer</h1>
     </header>
     <Input handleSearch={this.handleSearch} />
     {this.state.data !== null && <DataDisplay data={this.state.data} />}
   </div>
 );
}



// getLocation = async () => {
//   let searchQuery = this.state.searchQuery;
  // const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;
  // console.log(`App.getLocation() API = ${API}`);
  // await axios.get(API)
//     .then ( (res) => this.setState({ location: res.data[0], error : null }))
//     .catch( (res) => {
//       this.state.error = res;
//       this.setState ({error : res});
//       console.log(`getLocation error`);
//   });
// };

// render() {
//   return (
//     <div className="App">
//        <Header header="City Explorer"/>
//        <Input handleChange = {this.handleChange}/>
//       {this.state.location.place_id && 
//         <><h2 className="h2">Location: {this.state.location.display_name}</h2>
//         <h2 className="h2">Latitude: {this.state.location.lat}</h2>
//         <h2 className="h2">Longitude: {this.state.location.lon}</h2>
//         <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`} 
//         city={this.state.location.display_name}
//         />
//         </>
//       }
//       {this.state.error && 
//       <Errors errorMessage = {this.state.error}/>}
//     </div>
//   );
// }
 }

export default App;
