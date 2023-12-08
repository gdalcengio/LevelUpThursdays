import "./Map.css"
import { MapContainer, Marker, TileLayer, useMap, Popup} from 'react-leaflet'
import { LatLngExpression, Icon } from 'leaflet'
import { useSelector } from "react-redux";

interface ChangeViewProps {
    center: LatLngExpression;
}

const ChangeView: React.FC<ChangeViewProps> = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
};

interface LocationState {
  latitude: number | null;
  longitude: number | null;
}

export const MapPanel: React.FC = () => {

  const mooseIcon = new Icon({
    iconUrl: 'moose.png',
    iconSize: [30, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  const markerState = useSelector((state: any) => state.MooseSightingsState.location) as LocationState;
  const defaultLocation: [number, number] = [48.4284, -123.3656];

  const markerPosition: [number, number] = [
      markerState.latitude ?? defaultLocation[0],
      markerState.longitude ?? defaultLocation[1]
  ];

  return <div className="MapPanel">
      <MapContainer className="MapContainer" center={defaultLocation} zoom={13} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markerState.latitude != null && markerState.longitude != null && (
              <>
                  <Marker position={markerPosition} icon={mooseIcon}>
                    <Popup>
                          Latitude: {markerPosition[0]}, Longitude: {markerPosition[1]}
                      </Popup>
                  </Marker>
                  <ChangeView center={markerPosition} />
              </>
          )}
      </MapContainer>
  </div>
};
