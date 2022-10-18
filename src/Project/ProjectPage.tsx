import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage: React.FC<{}> = () => {
  const { pid } = useParams();
  return <div>This is project {pid}.</div>;
};

export default ProjectPage;
