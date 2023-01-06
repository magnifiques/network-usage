import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classes from "./MapChart.module.css";
import MapLegend from "../MapLegend/MapLegend";
import { regions } from "../../lib/regions";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = regions;

export default function MapChart() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {markers.map((marker) => {
            return (
              <Marker key={marker.id} coordinates={marker.coordinates}>
                <Tippy
                  trigger="click"
                  theme="material"
                  content={`Region: ${marker.region}, Data-Usage: ${marker.data}`}
                >
                  <circle
                    className={classes.circle}
                    r={
                      marker.data >= 500
                        ? 30
                        : marker.data < 500 && marker.data >= 300
                        ? 20
                        : marker.data < 300 && marker.data >= 100
                        ? 10
                        : 5
                    }
                    fill={
                      marker.data >= 500
                        ? "rgba(0, 0, 255, 1)"
                        : marker.data < 500 && marker.data >= 300
                        ? "rgba(0, 0,255,0.7)"
                        : marker.data < 300 && marker.data >= 100
                        ? "rgba(0, 0, 255, 0.5)"
                        : "rgba(0, 0, 255, 0.3)"
                    }
                    stroke="white"
                  />
                </Tippy>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>
      <MapLegend />
    </div>
  );
}
