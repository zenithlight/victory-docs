import React from "react";

let Analytics = React.Fragment;

if (typeof document !== "undefined") {
  Analytics = require("react-router-ga").default;
}

// eslint-disable-next-line react/prop-types
export default ({ children, ...rest }) => {
  if (typeof document !== "undefined") {
    return <Analytics {...rest}>{children}</Analytics>;
  }
  return <Analytics>{children}</Analytics>;
};
