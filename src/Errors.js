/**
 * @file Errors.js
 * @author Lillian McBride
 * @description Renders an error
 */
 import React from "react";

 class Errors extends React.Component {

   render() {
     return (
         <div>
         <h1>You Have Encountered An Error</h1>
         <p>{this.props.errorMessage.message}</p>
         </div>
     )
   }
 }
 
 export default Errors;