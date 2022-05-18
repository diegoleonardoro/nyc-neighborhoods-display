import React from "react";

import "./Neighborhoods.css";

const NeighborhoodsLabels = ({ neighborhoods }) => {
  const renderedNeighborhoods = neighborhoods.map((item, index) => {
    return (
      <div className="neighborhood" key={item}>
        {item}
      </div>
    );
  });

  return <div className="neighborhoodsContainer">{renderedNeighborhoods}</div>;
};

export default NeighborhoodsLabels;
