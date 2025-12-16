"use client";

import GoogleMapView from "./components/GoogleMapView";

export default function MapPage() {
  return (
    <div className="relative h-screen w-full">
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="mt-4 px-8 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-md max-w-[50%]">
          <h1 className="text-md text-center md:text-xl text-xl font-semibold tracking-wide text-neutral-600">
            Naxia Early Warning Pole
          </h1>
        </div>
      </header>

      <div className="absolute inset-0 z-0">
        <GoogleMapView />
      </div>
    </div>
  );
}
