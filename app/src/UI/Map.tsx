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
=======

    const mooseIconMale = new Icon({
        iconUrl: 'moose.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    const mooseIconFemale = new Icon({
        iconUrl: 'fmoose.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    const mooseIconCalf = new Icon({
        iconUrl: 'calf.png',
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

    const mooseArray = useSelector((state: any) => state.MooseSightingsState.mooseArray).slice(0, 5);

    const getOffsetLocation = (index: number, baseLocation: [number, number]): [number, number] => {
        const offsetDistance = 0.002;
        switch (index) {
            case 1: // Behind (Bottom)
                return [baseLocation[0] - 0.0015, baseLocation[1] + 0.0041];
            case 2: // Behind (Top)
                return [baseLocation[0] + 0.001, baseLocation[1] + 0.0041];
            case 3: // Above
                return [baseLocation[0] + offsetDistance, baseLocation[1]];
            case 4: // Below
                return [baseLocation[0] - offsetDistance, baseLocation[1]];
            default: // First moose (no offset)
                return baseLocation;
        }
    };

    const getMooseIcon = (moose: any) => {
        if (moose.age == 1 && moose.age !== null) {
            return mooseIconCalf;
        }
        if (moose.gender === 'male') {
            return mooseIconMale;
        }
        if (moose.gender === 'female') {
            return mooseIconFemale;
        }
        else {
            return mooseIconMale;
        }
    }

    return (
        <div className="MapPanel">
            <MapContainer className="MapContainer" center={defaultLocation} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mooseArray.map((moose: any, index: number) => {
                    const position = getOffsetLocation(index, markerPosition);
                    const mooseIcon = getMooseIcon(moose);
                    return <Marker key={index} position={position} icon={mooseIcon} />;
                })}
                <ChangeView center={markerPosition} />
            </MapContainer>
        </div>
    );
};
