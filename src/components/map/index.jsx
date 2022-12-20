import { MapContainer, TileLayer,Marker } from 'react-leaflet';

const position = [35.7219,51.3347]

const Map = () => {
return (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
    </Marker>
  </MapContainer>
)
}

export default Map