

import React from "react";
import  Image from "react-bootstrap/Image";

class Map extends React.Component {

    render() {
        return( 
            <div>
            <Image className="map" src={this.props.img_url} alt={this.props.city} title={this.props.city}/>
            </div>
        )
    }
}

export default Map;