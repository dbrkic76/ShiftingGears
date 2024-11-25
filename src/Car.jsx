import React from "react";

export const Car = (props) => {
  const [gear, setGear] = React.useState(0);
  let displayedGear = gear === 0 ? "N" : gear;
  displayedGear = gear === -1 ? "R" : displayedGear;
  return (
    <div>
      <h1 style={{ color: props.carColor }}>{props.brand}</h1>
      <p>Current Gear: {displayedGear}</p>
      <button
        onClick={function () {
          setGear(gear + 1);
        }}>
        Shift Up
      </button>
      <button
        onClick={function () {
          if (gear === -1) {
            setGear(gear);
          } else {
            setGear(gear - 1);
          }
        }}>
        Shift Down
      </button>
    </div>
  );
};
