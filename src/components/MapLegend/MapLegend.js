import React from "react";
import classes from "./MapLegend.module.css";
import { regions } from "../../lib/regions";

function MapLegend() {
  const above500 = regions.filter((region) => {
    return region.data >= 500;
  });

  const between500And300 = regions.filter((region) => {
    return region.data < 500 && region.data >= 300;
  });

  const between300And100 = regions.filter((region) => {
    return region.data < 300 && region.data >= 100;
  });

  const below100 = regions.filter((region) => {
    return region.data < 100;
  });

  console.log(below100, between300And100, between500And300, above500);
  return (
    <div className={classes.container}>
      <div>
        <h3>Map Legend</h3>
      </div>
      <div className={classes.individual}>
        <p>500 and above</p>
        <span className={`${classes.box} ${classes.above}`}></span>
        <p className={classes.percentage}>{(above500.length * 100) / 20}%</p>
      </div>
      <div className={classes.individual}>
        <p>Between 499 and 300</p>
        <span className={`${classes.box} ${classes.between1}`}></span>
        <p className={classes.percentage}>
          {(between500And300.length * 100) / 20}%
        </p>
      </div>
      <div className={classes.individual}>
        <p>Between 299 and 100</p>
        <span className={`${classes.box} ${classes.between2}`}></span>
        <p className={classes.percentage}>
          {(between300And100.length * 100) / 20}%
        </p>
      </div>
      <div className={classes.individual}>
        <p>Below 100</p>
        <span className={`${classes.box} ${classes.below}`}></span>
        <p className={classes.percentage}>{(below100.length * 100) / 20}%</p>
      </div>
    </div>
  );
}

export default MapLegend;
