/**
 * @file Header.js
 * @author Lillian McBride
 * @description Renders the header for City Explorer
 */
 import React from "react";

 class Header extends React.Component {

   render() {
     return <h1 className="h1">{this.props.header}</h1>;
   }
 }
 
 export default Header;