import React from "react";
import { Outlet } from "react-router-dom";

const RecurrenceContainer: React.FC<{}> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RecurrenceContainer;
