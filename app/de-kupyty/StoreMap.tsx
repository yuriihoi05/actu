"use client";

import { useEffect, useRef } from "react";
import type { Store, Region } from "./stores";

interface Props {
  stores: Store[];
  regions: Region[];
  activeRegion: string | null;
}

export default function StoreMap({ stores, regions, activeRegion }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      const map = L.map(mapRef.current!, {
        center: [49.0, 31.5],
        zoom: 6,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      mapInstance.current = map;

      // Custom orange round marker
      const orangeIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:22px;height:22px;
          background:#ec6907;
          border:3px solid #fff;
          border-radius:50%;
          box-shadow:0 2px 6px rgba(0,0,0,0.35);
          cursor:pointer;
        "></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -14],
      });

      stores.forEach((store) => {
        const marker = L.marker([store.lat, store.lng], { icon: orangeIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:sans-serif;min-width:200px;padding:4px 0">
              <strong style="font-size:14px;color:#111">${store.name}</strong><br/>
              <span style="font-size:12px;color:#666;display:block;margin:4px 0">${store.address}</span>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  display:inline-block;margin-top:8px;padding:6px 14px;
                  background:#ec6907;color:#fff;font-size:12px;font-weight:700;
                  text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;
                "
              >Маршрут</a>
            </div>
          `);
        markersRef.current.push({ marker, regionId: store.region });
      });
    })();

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
      markersRef.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to activeRegion change
  useEffect(() => {
    if (!mapInstance.current) return;

    const L = window.L as typeof import("leaflet") | undefined;
    if (!L) return;

    if (!activeRegion) {
      mapInstance.current.flyTo([49.0, 31.5], 6, { duration: 1 });
      markersRef.current.forEach(({ marker }) => {
        if (!mapInstance.current.hasLayer(marker)) marker.addTo(mapInstance.current);
      });
      return;
    }

    const region = regions.find((r) => r.id === activeRegion);
    if (region) {
      mapInstance.current.flyTo(region.center, region.zoom, { duration: 1 });
    }

    markersRef.current.forEach(({ marker, regionId }) => {
      if (regionId === activeRegion) {
        if (!mapInstance.current.hasLayer(marker)) marker.addTo(mapInstance.current);
      } else {
        if (mapInstance.current.hasLayer(marker)) mapInstance.current.removeLayer(marker);
      }
    });
  }, [activeRegion, regions]);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "550px" }} />
  );
}
