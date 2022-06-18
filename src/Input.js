/**
 * @file Input.js
 * @author Lillian McBride
 * @description Renders the input box for City Explorer
 */
 import React from "react";
 import "./App.css";

 class Input extends React.Component {

    // handleClick = (e) => {
    //     e.preventDefault();
    //     let location = document.getElementById("input").value;
    //     console.log(`input.handleClick() location = ${location}`);
    //     this.props.handleSearch(location);
    // }

    handleClick = (e) => {
      e.preventDefault();
      let location = document.getElementById("input").value;
      console.log(`input.handleClick() location = ${location}`);
      this.props.handleChange(location);
  }

   render() {
     return  (
   <div>
            <input id="input" onChange={(e) => this.setState({ searchQuery: e.target.value })}
           placeholder="search for a city" />
           <button onClick={this.handleClick}>Explore!</button>          
  </div>
     )
   }
 }
 
 export default Input;