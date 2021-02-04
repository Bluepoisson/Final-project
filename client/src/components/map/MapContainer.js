import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import mapStyles from "./mapStyles";



const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

  
  const defaultCenter = {
    lat: 55.604980,
    lng: 13.003822,
  }

  //? clickable markers 
  const locations = [
    {
      name: "Vårdcentralen Södervärn",
      location: { 
        lat: 55.589131,
        lng: 13.004727
      },
    },
    {
      name: "Möllevångs Vårdcentral",
      location: { 
        lat: 55.588380,
        lng: 13.008570
      },
    },
    {
      name: "Vårdcentralen Eden",
      location: { 
        lat: 55.593190,
        lng: 13.010610
      },
    },
    {
      name: "Fågelbacken vårdcentral",
      location: { 
        lat: 55.596440,
        lng: 12.984020
      },
    },
    {
      name: "Capio City Clinic Center Malmo",
      location: { 
        lat: 55.603600,
        lng: 13.004550
      },
    }
  ];

  //? clickable infowindows 
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

//? dynamically showing marker geolocation api
const [ currentPosition, setCurrentPosition ] = useState({});
  
const success = position => {
  const currentPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  setCurrentPosition(currentPosition);
};

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);
})

//? draggable marker 
const onMarkerDragEnd = (e) => {
  const lat = e.latLng.lat();
  const lng = e.latLng.lng();
  setCurrentPosition({ lat, lng})
};

// const API_KEY = `process.env.GOOGLE_API_KEY`; 
  
  return (
   
<>     
      <LoadScript  
      googleMapsApiKey={process.env.GOOGLE_API_KEY} >
   
         {/* <Search3 /> */}
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  </>
  )
}

export default MapContainer;