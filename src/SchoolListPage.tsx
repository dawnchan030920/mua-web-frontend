import React from "react";
import { Outlet } from "react-router-dom";

const SchoolListPage: React.FC<{}> = () => {
  return (
    <>
      <div>This is school list page.</div>
      <Outlet />
    </>
  );
};

export default SchoolListPage;
