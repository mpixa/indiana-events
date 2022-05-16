import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCB3SGCF0JdSzMOi6Q-EqVzj48sI2Y2dSE",
  });
  if (!isLoaded)
    return <h1>Loading map...</h1>;
  return <Map/>;
}

// Initialize and add the map
function Map() {
    return (
      <GoogleMap
        zoom={ 10 }
        center={{ lat: 40, lng: -86 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    );
  }
  
export default Maps;
