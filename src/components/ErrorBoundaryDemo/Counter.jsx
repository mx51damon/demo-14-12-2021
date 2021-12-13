import React from "react";
import PropTypes from "prop-types";

export default function Counter({ count, setCount }) {
  if (count === 5) throw new Error("Error occurred during button clicks."); // try to create an error and make UI crashed ..

  return (
    <div>
      <span>Counting for button click times: {count}</span>{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

Counter.defaultProps = {
  count: 0,
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};
