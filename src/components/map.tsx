import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconLocation from "../assets/images/icon-location.svg";

interface MapProps {
  lat: number;
  lng: number;
}

const pinIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

function Recenter({ lat, lng }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [map, lat, lng]);

  return null;
}

export function Map({ lat, lng }: MapProps) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} zoomControl={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={pinIcon} />
      <Recenter lat={lat} lng={lng} />
    </MapContainer>
  );
}
