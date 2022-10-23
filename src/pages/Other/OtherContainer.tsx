import React from "react";
import { Outlet } from "react-router-dom";

const OtherContainer: React.FC<{}> = () => {
  return (
    <>
      <div>Ooops, this is other!</div>
      <Outlet />
    </>
  );
};

export default OtherContainer;
