import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 12.971598, // Default to Bangalore
  lng: 77.594566,
};

function GoogleMapComponent({ markers }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCJbE4dN9dCm-79xEnL8iQxn4iVHebcALU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
