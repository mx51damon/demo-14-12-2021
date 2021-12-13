import React from "react";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorBoundaryDemo() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h4>Error Boundary example (demo):</h4>
      <ErrorBoundary>
        <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  );
}
