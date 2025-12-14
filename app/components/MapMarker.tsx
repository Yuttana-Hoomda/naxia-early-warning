"use client";
import { IoIosPin } from "react-icons/io";
import { Marker, InfoWindow } from "@react-google-maps/api";

type Props = {
    id: string | number;
    lat: number;
    lng: number;
    location: string;
    selectedId: string | number | null;
    onSelect: (id: string | number) => void;
    onClose: () => void;
};

export default function MapMarker({
    id,
    lat,
    lng,
    location,
    selectedId,
    onSelect,
    onClose,
}: Props) {
    const isSelected = selectedId === id;

    return (
        <>
            <Marker
                position={{ lat, lng }}
                onClick={() => onSelect(id)}
                // small UX improvement: cursor feedback
                options={{ cursor: "pointer" }}
            />

            {isSelected && (
                <InfoWindow
                    position={{ lat, lng }}
                    onCloseClick={onClose}
                    options={{
                        pixelOffset: new google.maps.Size(0, -8),
                    }}
                >
                    <div className="select-none rounded-lg bg-white p-3 shadow-lg min-w-[180px]">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="rounded-full size-8 bg-blue-200 flex justify-center items-center">
                                <IoIosPin color="blue" size={20}/>
                            </div>
                            <p className="font-medium text-black text-[14px]">{location}</p>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </>
    );
}
