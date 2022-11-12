import React from "react";
import {useParams} from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleHOC from "../../components/Composite/ArticleHOC";

const RecurrencePage: React.FC<{}> = () => {
  const { pid } = useParams();
  return (
    <ArticleHOC pid={pid as string} category={SiteNavKey.Recurrence} categoryNumber={3} />
  )
};

export default RecurrencePage;
