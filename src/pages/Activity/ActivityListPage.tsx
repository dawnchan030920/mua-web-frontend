import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleListHOC from "../../components/Composite/ArticleListHOC";

const ActivityListPage: React.FC = () => {
    return <ArticleListHOC category={SiteNavKey.Activity} categoryNumber={"activitydescription"} />
}

export default ActivityListPage;