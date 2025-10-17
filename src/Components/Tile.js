import React from "react";

const Tile = ({ value }) => {
  const classes = `tile tile-${value}`;
  return (
    <div className={classes}>
      {value !== 0 ? value : ""}
    </div>
  );
};

export default Tile;
