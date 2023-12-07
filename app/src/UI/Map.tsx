import { useRef } from "react";
import "./Map.css"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'


export const MapPanel = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%MapPanel render:" + ref.current.toString(), "color: yellow");

  return <div className="MapPanel">
      <MapContainer className="MapContainer" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
  </div>
}
