import React from "react";
import ErrorBoundaryDemo from "../ErrorBoundaryDemo";
import FeatureFlagDemo from ".";

const role = "superAdmin";
const standard = 4; // for failure demo
// const standard = 0; // for success demo

export default function CompositionDemo() {
  return (
    <>
      <FeatureFlagDemo role={role} standard={standard}>
        <ErrorBoundaryDemo />
      </FeatureFlagDemo>
    </>
  );
}
