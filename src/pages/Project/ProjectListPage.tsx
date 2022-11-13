import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleListHOC from "../../components/Composite/ArticleListHOC";

const ProjectListPage: React.FC = () => {
  return <ArticleListHOC category={SiteNavKey.Project} categoryNumber={"projectdescription"} />
}

export default ProjectListPage;