/**
 * @file App.js
 * @Author Lillian McBride
 */

import React from "react";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    searchQuery: "",
    location: {place_id: "unknown", display_name: "", lat:"", lon:""},
  };
}

getLocation = async () => {
  const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
  const res = await axios.get(API);
  this.setState({ location: res.data[0] });
};

render() {
  console.log(`Location: ${JSON.stringify(this.state.location)}`);
  return (
    <>
      <input
        onChange={(e) => this.setState({ searchQuery: e.target.value })}
        placeholder="search for a city"
      />
      <button onClick={this.getLocation}>Explore!</button>
      {this.state.location.place_id && (
        <><h2>The city is: {this.state.location.display_name}</h2><h2>Latitude is: {this.state.location.lat}</h2><h2>Longitude is: {this.state.location.lon}</h2></>
      )}
    </>
  );
}
}

export default App;
