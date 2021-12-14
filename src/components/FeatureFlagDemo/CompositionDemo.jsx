import React from "react";
import ErrorBoundaryDemo from "../ErrorBoundaryDemo";
import FeatureFlagDemo from ".";

const role = "visitor";
// const standard = 4; // for failure demo
const standard = 0; // for success demo

export default function CompositionDemo() {
  return (
    <FeatureFlagDemo
      mode={"union"}
      role={role}
      standard={standard}
      domain={window.location.href}
    >
      <ErrorBoundaryDemo title={"Error Boundary for Composition demo"} />
    </FeatureFlagDemo>
  );
}
