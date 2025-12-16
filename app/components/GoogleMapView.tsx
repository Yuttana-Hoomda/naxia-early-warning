"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import {
    fetchLocations,
    Location,
} from "../services/locationService";

import "../lib/leafletIcon"; // 👈 important

export default function GoogleMapView() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedId, setSelectedId] = useState<string | number | null>(null);

    useEffect(() => {
        fetchLocations()
            .then(setLocations)
            .catch(console.error);
    }, []);

    return (
        <MapContainer
            center={[13.7563, 100.5018]} // Bangkok
            zoom={6}
            style={{ width: "100%", height: "100%" }}
            zoomControl={true}
            doubleClickZoom={false}
        >
            {/* OpenStreetMap Tiles */}
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((loc) => (
                <MapMarker
                    key={loc.id}
                    id={loc.id}
                    lat={loc.lat}
                    lng={loc.lng}
                    location={loc.location}
                    district={loc.district}
                    subdistrict={loc.subdistrict}
                    province={loc.province}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    onClose={() => setSelectedId(null)}
                />
            ))}
        </MapContainer>
    );
}
