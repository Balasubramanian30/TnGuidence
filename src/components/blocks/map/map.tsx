/* eslint-disable @typescript-eslint/no-explicit-any */
// components/TamilNaduMap.tsx
"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useMemo } from "react";
import { markers } from "./utils/district";

type TamilNaduMapProps = {
    onDistrictClick?: (district: string) => void;
    activeType?: 'district' | 'airports' | 'seaports' | 'parks' | 'highways' | 'industries' | 'telecom';
    selectedDistrict?: string;
};

const geoUrl = "/geo/tamil-nadu.geojson";

const TamilNaduMap = ({ onDistrictClick, activeType, selectedDistrict }: TamilNaduMapProps) => {
    const currentMarkers = useMemo(() => markers[activeType || "district"], [activeType]);
    
    return (
        <div className="w-full max-w-3xl h-fit pb-20">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 5000, center: [79, 11] }}
                style={{ width: "120%", height: "120%" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo: any) => {
                            const districtName =
                                geo?.properties?.district
                                // console.log(geo?.properties?.district)
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        if (districtName && onDistrictClick) onDistrictClick(districtName);
                                    }}
                                    style={{
                                        default: {
                                            fill: selectedDistrict
                                                ? districtName === selectedDistrict
                                                    ? "#3A1F75"
                                                    : "#ffffff"
                                                : "#e0e0e0", // default when no district is selected
                                            stroke: "#555",
                                            strokeWidth: 0.5,
                                        },
                                        hover: { fill: "#3A1F75", cursor: "pointer" },
                                        pressed: { fill: "#5E72EB" },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>

                {currentMarkers && currentMarkers.map((marker, idx) => (
                    <Marker key={idx} coordinates={marker.coordinates}>
                        <circle r={7} fill={"#5E72EB"} />
                        {/* <text textAnchor="middle" y={-10} style={{ fontSize: 10 }}>
                            {marker.name}
                        </text> */}
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default TamilNaduMap;
