import * as React from "react";

import "./InfiniteLoader.scss";

interface InfiniteLoaderProps {
  extraClass?: string;
}

export const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ extraClass = "" }: InfiniteLoaderProps) => {
  return (
    <div className={`infinite-loader ${extraClass}`}>
      <div id="circle-one" className="infinite-loader__circle" />
      <div id="circle-two" className="infinite-loader__circle" />
      <div id="circle-three" className="infinite-loader__circle" />
    </div>
  );
};

InfiniteLoader.displayName = "InfiniteLoader";
