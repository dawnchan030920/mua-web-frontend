import React from "react";
import { useParams } from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleLayout from "../../components/Layout/ArticleLayout";

const RecurrencePage: React.FC<{}> = () => {
  const { pid } = useParams();
  return (
      <ArticleLayout passageTitles={[
      ]} category={SiteNavKey.Recurrence} title={``}>
      </ArticleLayout>
  )
};

export default RecurrencePage;
