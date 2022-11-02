import React from "react";
import { Outlet } from "react-router-dom";

const ActivityContainer: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ActivityContainer;
