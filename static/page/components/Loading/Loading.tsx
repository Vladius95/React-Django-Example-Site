import * as React from "react";

import "./Loading.scss";

export interface LoadingProps {}

function areEqualLoadingProps(prevProps: LoadingProps, nextProps: LoadingProps) {
  return false;
}

export const Loading: React.FC<LoadingProps> = React.memo(() => {
  return (
    <div className="center">
      <div className="hexagon clockwise-direction size-1" />
      <div className="hexagon anti-clockwise-direction size-2" />
      <div className="hexagon clockwise-direction size-3" />
      <div className="hexagon anti-clockwise-direction size-4" />
    </div>
  );
}, areEqualLoadingProps);

Loading.displayName = "Loading";
