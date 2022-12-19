import React from 'react';
import GoogleMapReact from 'google-map-react';
import {GeoAlt} from 'react-bootstrap-icons'

const location = {
address: '1600 Amphitheatre Parkway, Mountain View, california.',
lat: 37.42216,
lng: -122.08427,
}


const LocationPin = ({ text }) => (
    <div className="d-flex align-items-center" style={{width:"180px"}}>
        <span className='fs-1 pin-icon'>
            <GeoAlt />
        </span>
      <p className="pin-text">{text}</p>
    </div>
);


const Map = () => (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_GOOGLE_API_KEY }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
);


export default Map