import React from 'react';
import './OurLocationsAcrossTheContinent.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package

import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as parkData from "./OurLocationsAcrossTheContinent.json";


function OurLocationsAcrossTheContinent() {
  return (
    <MapContainer center={[-1.28, 29.56]}  zoom={3.0} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkData.features.map(park =>(
        <Marker 
               key={park.properties.PARK_ID} 
               position={[
                park.geometry.coordinates[0],
                park.geometry.coordinates[1]
              ]}
        />
        ))}
    </MapContainer>
  );
}

export default OurLocationsAcrossTheContinent;