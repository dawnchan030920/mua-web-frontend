import React from "react";
import { Outlet } from "react-router-dom";

const ProjectContainer: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProjectContainer;
