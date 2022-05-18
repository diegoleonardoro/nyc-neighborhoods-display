import React, { useState } from "react";

import NeighborhoodsLabels from "./Neighborhoods";
import boroughsData from "../data/boroughsData.json";
import "./Boroughs.css";

//--- get the neighborhood names from each borough --- :
const selectNeighborhoodNames = array => {
  const boroughs = [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "Bronx",
    "Staten Island"
  ];

  let nhoodsArr = [];
  for (var i = 0; i < boroughs.length; i++) {
    let borough = boroughs[i];
    let neighborhoods = array
      .filter(item => item.Borough === borough)
      .map(({ Description, the_geom, Borough, ...rest }) => {
        return rest;
      });

    let neighborhoodsAlone = [];
    neighborhoods.map(item => {
      neighborhoodsAlone.push(Object.values(item)[0]);
    });
    nhoodsArr.push({ borough, neighborhoods: neighborhoodsAlone });
  }
  return nhoodsArr;
};

//------- ------ ------ ------ ------ ------ ------ ------ ------ ------

const neighborhoods = selectNeighborhoodNames(boroughsData);

const Boroughs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  let prevActiveIndex;

  const renderedItems = neighborhoods.map((item, index) => {
    let display = index === activeIndex ? "active" : "doNotDisplay";

    return (
      <React.Fragment key={item.borough}>
        <div className="title-arrow-container">
          <div
            style={{ cursor: "pointer", marginBottom: "10px" }}
            className="boroughTitle"
            onClick={() => {
              setActiveIndex(index === activeIndex ? null : index);
            }}
          >
            {item.borough}
            <div className={"boroughDescription " + display}>
              <NeighborhoodsLabels neighborhoods={item.neighborhoods} />
            </div>
          </div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </React.Fragment>
    );
  });

  return <div className="boroughsContainer">{renderedItems}</div>;
};

export default Boroughs;
