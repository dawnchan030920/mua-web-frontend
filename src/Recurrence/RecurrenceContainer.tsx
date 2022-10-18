import React from "react";
import { Outlet } from "react-router-dom";

const RecurrenceContainer: React.FC<{}> = () => {
  return (
    <>
      <div>
        Welcome to recurrence, where our schools are recreated and presented.
      </div>
      <Outlet />
    </>
  );
};

export default RecurrenceContainer;
