"use client";

import { useLoadScript } from "@react-google-maps/api";

export function GoogleMapProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    if (loadError)
        return (
            <div className="p-4 text-red-600">
                Failed to load Google Maps
            </div>
        );

    if (!isLoaded)
        return <div className="p-4">Loading map...</div>;

    return <>{children}</>;
}
