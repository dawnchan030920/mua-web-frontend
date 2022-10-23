import React from "react";
import { Outlet } from "react-router-dom";

const ActivityContainer: React.FC<{}> = () => {
  return (
    <>
      <div>You have entered activity stuff.</div>
      <Outlet />
    </>
  );
};

export default ActivityContainer;
