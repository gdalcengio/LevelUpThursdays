import "./Map.css"
import { MapContainer, Marker, TileLayer, useMap, Popup} from 'react-leaflet'
import { LatLngExpression, Icon } from 'leaflet'
import { useSelector } from "react-redux";
import L from "leaflet";
import React from "react";

interface ChangeViewProps {
  center: LatLngExpression;
}

const mooseIconMale = new Icon({
  iconUrl: "moose.png",
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const mooseIconFemale = new Icon({
  iconUrl: "fmoose.png",
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const mooseIconCalf = new Icon({
  iconUrl: "calf.png",
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ChangeView: React.FC<ChangeViewProps> = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

interface LocationState {
  latitude: number | null;
  longitude: number | null;
}

const MapMarkers = (props: any) => {
  const mapState = useMap();
  const [zoomed, setZoomed] = React.useState(0);

  mapState.on("zoomend", () => {
    setZoomed(zoomed + 1);
  });


  const mooseArray = useSelector(
    (state: any) => state.MooseSightingsState.mooseArray
  ).slice(0, 5);

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


  const getOffsetLocation = (
    index: number,
    baseLocation: [number, number]
  ): [number, number] => {
    const ogLatLng = new L.LatLng(baseLocation[0], baseLocation[1]);
    const ogXY = mapState.latLngToContainerPoint(ogLatLng);
    const offsetDistance = 10;
    const newXY = ogXY.add([offsetDistance * index, 0]);
    const offsetPoint = mapState.containerPointToLatLng(newXY);

    return [offsetPoint.lat, offsetPoint.lng];
  };

  const getMooseIcon = (moose: any) => {
    if (moose.age === "Calf" && moose.age !== null) {
      return mooseIconCalf;
    }
    if (moose.gender === "male") {
      return mooseIconMale;
    }
    if (moose.gender === "female") {
      return mooseIconFemale;
    } else {
      return mooseIconMale;
    }
  };


  const Meese = (props: any) => (
    <>
      {mooseArray.map((moose: any, index: number) => {
        const position = getOffsetLocation(index, markerPosition);
        const mooseIcon = getMooseIcon(moose);
        return <Marker key={index} position={position} icon={mooseIcon} />;
      })}
    </>
  );

  return <Meese key={zoomed} />;
};

const defaultLocation: [number, number] = [48.4284, -123.3656];
export const MapPanel: React.FC = () => {
  const markerState = useSelector(
    (state: any) => state.MooseSightingsState.location
  ) as LocationState;
  const markerPosition: [number, number] = [
    markerState.latitude ?? defaultLocation[0],
    markerState.longitude ?? defaultLocation[1],
  ];

  return (
    <div className="MapPanel">
      <MapContainer
        className="MapContainer"
        center={defaultLocation}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarkers />
        <ChangeView center={markerPosition} />
      </MapContainer>
    </div>
  );
};
