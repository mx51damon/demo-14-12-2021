import React from "react";
import ErrorBoundaryDemo from "../ErrorBoundaryDemo";
import FeatureFlagDemo from ".";

const role = "visitor";
// const standard = 4; // for failure demo
const standard = 0; // for success demo

const HOCDemoComponent = () => (
  <FeatureFlagDemo role={role} standard={standard}>
    <ErrorBoundaryDemo />
  </FeatureFlagDemo>
);

const HOCDemo = FeatureFlagDemo({
  mode: "intersection",
  role,
  standard,
  domain: window.location.href,
  Component: HOCDemoComponent,
});

export default HOCDemo;
