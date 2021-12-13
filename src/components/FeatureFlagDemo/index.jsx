import React from "react";

export default function FeatureFlagDemo({
  mode,
  role,
  standard,
  domain,
  children,
  Component,
}) {
  const intersectionMode = "intersection";
  const roles = {
    // each role corresponding with a standard value
    superAdmin: 5,
    admin: 4,
    subAdmin: 3,
    user: 2,
    visitor: 1,
  }; // should get defined inside constant file

  const roleCheck = roles[role] > standard;
  const domainCheck = domain === process.env.REACT_APP_DOMAIN;
  const modeCheck =
    mode === intersectionMode //  https://en.wikipedia.org/wiki/Venn_diagram
      ? roleCheck && domainCheck
      : roleCheck || domainCheck;

  return modeCheck
    ? children
      ? children
      : () => <Component />
    : children
    ? null
    : () => null;
}

//  Maybe more readable

// if (modeCheck) {
//   if (roleCheck && domainCheck)
//     return children ? children : () => <Component />;
//   return children ? null : () => null;
// } else {
//   if (roleCheck || domainCheck)
//     return children ? children : () => <Component />;
//   return null;
// }
