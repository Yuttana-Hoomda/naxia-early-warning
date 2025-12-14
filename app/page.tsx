"use client";

import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useState, useMemo } from "react"; // 1. Import useMemo
import MapMarker from "./components/MapMarker";

type Location = {
  id: string | number;
  lat: number;
  lng: number;
  location: string;
};

export default function MapPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const mapCenter = useMemo(() => ({ lat: 13.7563, lng: 100.5018 }), []);

  const mapOptions = useMemo(() => ({
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    clickableIcons: false, 
  }), []);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data: Location[]) => {
        setLocations(data);
      });
  }, []);

  return (
    <div className="h-screen w-full">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter} 
        zoom={6}
        options={mapOptions}
      >
        {locations.map((loc) => (
          <MapMarker
            key={loc.id}
            id={loc.id}
            lat={loc.lat}
            lng={loc.lng}
            location={loc.location}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
            onClose={() => setSelectedId(null)}
          />
        ))}
      </GoogleMap>
    </div>
  );
}