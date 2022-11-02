import React from "react";
import { Outlet } from "react-router-dom";

const OtherContainer: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default OtherContainer;
