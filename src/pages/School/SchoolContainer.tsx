import React from "react";
import { Outlet } from "react-router-dom";

const SchoolContainer: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SchoolContainer;
