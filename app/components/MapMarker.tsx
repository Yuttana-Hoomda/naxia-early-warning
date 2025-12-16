"use client";

import { Marker, Popup } from "react-leaflet";
import { IoLocationSharp } from "react-icons/io5";

type Props = {
    id: string | number;
    lat: number;
    lng: number;
    location: string;
    district: string;
    subdistrict: string;
    province: string;
    selectedId: string | number | null;
    onSelect: (id: string | number) => void;
    onClose: () => void;
};

export default function MapMarker({
    id,
    lat,
    lng,
    location,
    subdistrict,
    district,
    province,
    selectedId,
    onSelect,
    onClose,
}: Props) {
    const isSelected = selectedId === id;

    return (
        <Marker
            position={[lat, lng]}
            eventHandlers={{
                click: (e) => {
                    e.originalEvent.stopPropagation();
                    onSelect(id);
                }
            }}
            bubblingMouseEvents={true}
        >
            {isSelected && (
                <Popup
                    closeButton={false}
                    autoClose={false}
                    closeOnEscapeKey={true}
                    closeOnClick={false}
                    eventHandlers={{
                        remove: onClose,
                    }}
                >
                    {/* Custom popup UI */}
                    <div className="relative text-gray-800 rounded-xl w-72 overflow-hidden">

                        {/* Close button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 
               bg-white/80 backdrop-blur rounded-full p-1 transition"
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="p-3">

                            {/* Title */}
                            <div className="flex items-start gap-2 pr-6 mb-2">
                                <IoLocationSharp size={18}/>

                                <h3 className="text-base font-semibold text-gray-900 leading-snug wrap-break-word line-clamp-2">
                                    {location}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gray-200 mb-2" />

                            {/* Location info */}
                            <div className="space-y-1.5 text-sm">

                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 text-xs w-14">ตำบล</span>
                                    <span className="text-gray-700 font-medium truncate">
                                        {subdistrict}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 text-xs w-14">อำเภอ</span>
                                    <span className="text-gray-700 font-medium truncate">
                                        {district}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 text-xs w-14">จังหวัด</span>
                                    <span className="text-gray-700 font-medium truncate">
                                        {province}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </Popup>
            )}
        </Marker>
    );
}
