import React from "react";
import { useParams } from "react-router-dom";

const RecurrencePage: React.FC<{}> = () => {
  const { pid } = useParams();
  return <div>It's one recurrence of {pid}.</div>;
};

export default RecurrencePage;
