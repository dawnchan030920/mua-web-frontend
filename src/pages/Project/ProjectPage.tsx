import React from "react";
import { useParams } from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleLayout from "../../components/Layout/ArticleLayout";

const ProjectPage: React.FC<{}> = () => {
  const { pid } = useParams();
  return (
      <ArticleLayout passageTitles={[
        {
          header: "Test Header 1",
          level: 2,
          id: "header01"
        },
        {
          header: "Test Header 2",
          level: 2,
          id: "header02",
        }
      ]} category={SiteNavKey.Project}>
        <h2 id={"header02"}>Test Header 1</h2>
        <p>Is this the so called {pid} activity?</p>
        <h2 id={"header02"}>Test Header 2</h2>
        <p>Yes, it is.</p>
      </ArticleLayout>
  )
};

export default ProjectPage;
