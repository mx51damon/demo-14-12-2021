import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorBoundaryDemo({ title }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h4>{title}</h4>
      <ErrorBoundary>
        <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  );
}

ErrorBoundaryDemo.defaultProps = {
  title: "Error Boundary Concept Demo",
};

ErrorBoundaryDemo.propTypes = {
  title: PropTypes.string,
};
