import React from "react";
import { useParams } from "react-router-dom";

const ActivityPage: React.FC<{}> = () => {
  const { pid } = useParams();
  return <div>This is activity {pid}</div>;
};

export default ActivityPage;
