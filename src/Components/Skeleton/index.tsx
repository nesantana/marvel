import React from "react";
import LoadingSkeleton from "react-loading-skeleton";

interface iSkeleton {
  count: number;
  height: number;
}

export const Skeleton: React.FC<any> = ({
  count = 1,
  height = 30,
  ...props
}: iSkeleton) => (
  <LoadingSkeleton
    count={count}
    height={height}
    style={{ width: "100%" }}
    {...props}
  />
);
