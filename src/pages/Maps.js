import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// require('dotenv').config();


export class Maps extends Component {
  render() {
    const Map = ReactMapboxGl({ accessToken: `${process.env.REACT_APP_MAPBOX_API}` });
    const zoom = [8];
    return (
      <Map
      style="mapbox://styles/mapbox/streets-v8"
      zoom={zoom}
      containerStyle={{
        height: "300px",
        width: "500px"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </Map>
    )
  }
}

export default Maps
