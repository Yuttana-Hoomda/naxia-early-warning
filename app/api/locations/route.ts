import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = path.join(process.cwd(), "data/locations.csv");
    const csv = fs.readFileSync(filePath, "utf8");

    const parsed = Papa.parse(csv, {
        header: true,
        dynamicTyping: true,
    });

    const safeData = parsed.data.map((row: any) => ({
        id: row.id,
        lat: row.lat,
        lng: row.lng,
        location: row.location,
        status: row.status,
    }));

    return NextResponse.json(safeData);
}
