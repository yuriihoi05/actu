"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { stores, regions } from "./stores";

const StoreMap = dynamic(() => import("./StoreMap"), { ssr: false });

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-[#ec6907]" viewBox="0 0 24 24" fill="none">
      <path d="M23.2969 16.9688C23.6719 17.1562 23.9531 17.5781 23.9531 18.0469L22.8281 23.1562C22.6875 23.6719 22.2656 24 21.75 24C9.70312 24 0 14.2969 0 2.25C0 1.73438 0.328125 1.3125 0.84375 1.17188L5.71875 0.046875C6.42188 0 6.84375 0.28125 7.03125 0.703125L9.28125 5.95312C9.375 6.75 9.1875 7.07812 8.95312 7.26562L6.09375 9.60938C7.82812 13.2656 10.7344 16.1719 14.3906 17.9062L16.7344 15.0469C16.9219 14.8125 17.25 14.625 17.5781 14.625C17.7656 14.625 18.0469 14.7188 18.0469 14.7188L23.2969 16.9688Z" fill="#EC6907" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-[#ec6907] mt-0.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 0C8.13 0 5 3.13 5 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 4.5 12 4.5s2.5 1.12 2.5 2.5S13.38 9.5 12 9.5z" fill="#EC6907" />
    </svg>
  );
}

export default function DeKupytyClient() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const visibleStores = activeRegion
    ? stores.filter((s) => s.region === activeRegion)
    : stores;

  const visibleRegions = activeRegion
    ? regions.filter((r) => r.id === activeRegion)
    : regions.filter((r) => stores.some((s) => s.region === r.id));

  return (
    <>
      {/* Header + dropdown */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Де нас знайти?</h1>

        {/* Region select */}
        <div className="relative inline-block w-full max-w-xs">
          <select
            value={activeRegion ?? ""}
            onChange={(e) => setActiveRegion(e.target.value || null)}
            className="w-full appearance-none border-2 border-[#ec6907] bg-white px-4 py-3 pr-10 text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer"
          >
            <option value="">Оберіть область</option>
            {regions
              .filter((r) => stores.some((s) => s.region === r.id))
              .map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
          </select>
          {/* Orange chevron */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-[#ec6907]" viewBox="0 0 12 8" fill="none" stroke="#ec6907" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1l5 6 5-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Map — full width */}
      <div className="w-full" style={{ height: 550 }}>
        <StoreMap stores={stores} regions={regions} activeRegion={activeRegion} />
      </div>

      {/* Store cards grouped by region */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {visibleRegions.map((region) => {
          const regionStores = visibleStores.filter((s) => s.region === region.id);
          if (!regionStores.length) return null;
          return (
            <div key={region.id} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {region.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {regionStores.map((store) => (
                  <div key={store.id} className="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-3">
                    <p className="text-base font-bold text-gray-900 leading-snug">{store.name}</p>

                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-[#ec6907] font-semibold hover:opacity-80 transition-opacity"
                    >
                      <PhoneIcon />
                      {store.phone}
                    </a>

                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <PinIcon />
                      <span>{store.address}</span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center h-10 px-5 border-2 border-[#ec6907] text-sm font-bold text-[#ec6907] uppercase tracking-wide hover:bg-[#ec6907] hover:text-white transition-all duration-300"
                    >
                      Маршрут
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
