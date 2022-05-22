
/**
 * @file DataDisplay.js
 */
 import React from "react";

 class DataDisplay extends React.Component {


   render() {
       let forecasts = Object.entries(this.props.data);
       console.log( "dataDisplay.render " , forecasts);
     return (
    <div className="dataDisplayDiv">
        <ul className="ul">
            {
                forecasts.map( (item) => {
                    return <li className="h2" key={Math.random()}>{item[1].date} - {item[1].weather}</li>
                })
            }

        </ul>
    </div>
     );
   }
 }
 
 export default DataDisplay;