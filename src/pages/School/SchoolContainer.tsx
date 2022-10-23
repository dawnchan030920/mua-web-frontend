import React from "react";
import { Outlet } from "react-router-dom";

const SchoolContainer: React.FC<{}> = () => {
  return (
    <>
      <div>Now you have entered school stuff.</div>
      <Outlet />
    </>
  );
};

export default SchoolContainer;
