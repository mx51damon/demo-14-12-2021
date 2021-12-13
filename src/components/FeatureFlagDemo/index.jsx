import React from "react";

export default function FeatureFlagDemo({
  role,
  standard,
  domain,
  children,
  Component,
}) {
  const roles = {
    // each role corresponding with a standard value
    superAdmin: 5,
    admin: 4,
    subAdmin: 3,
    user: 2,
    visitor: 1,
  }; // should get defined inside constant file

  console.log(typeof children);

  if (
    children &&
    (roles[role] > standard || domain === process.env.REACT_APP_DOMAIN)
  )
    return children;

  if (Component) return () => <Component />;

  return null;
}
