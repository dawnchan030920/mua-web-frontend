import React from "react";
import {useParams} from "react-router-dom";
import ArticleLayout from "../../components/Layout/ArticleLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const ActivityPage: React.FC = () => {
  const { pid } = useParams();
  return (
      <ArticleLayout passageTitles={[]} category={SiteNavKey.Activity} title={``}>
      </ArticleLayout>
  )
};

export default ActivityPage;
