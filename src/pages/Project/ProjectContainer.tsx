import React from "react";
import { Outlet } from "react-router-dom";

const ProjectContainer: React.FC<{}> = () => {
  return (
    <>
      <div>You have entered Project stuff.</div>
      <Outlet />
    </>
  );
};

export default ProjectContainer;
