import React from "react";

export const Counter = ({ startValue }) => {
  const [value, setValue] = React.useState(startValue);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={function () {
          if (value < 20) {
            setValue(value + 1);
          }
        }}>
        +
      </button>
      <button
        onClick={function () {
          setValue(value - 1);
        }}>
        -
      </button>
      <button
        onClick={() => {
          setValue(startValue);
        }}>
        RESET
      </button>
    </div>
  );
};
