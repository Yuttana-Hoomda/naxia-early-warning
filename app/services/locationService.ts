export type Location = {
    id: string | number;
    lat: number;
    lng: number;
    location: string;
    district: string;
    subdistrict: string;
    province: string;
};

export async function fetchLocations(): Promise<Location[]> {
    const res = await fetch("/api/locations");

    if (!res.ok) {
        throw new Error("Failed to fetch locations");
    }

    return res.json();
}
