import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleListHOC from "../../components/Composite/ArticleListHOC";

const OtherListPage: React.FC = () => {
    return <ArticleListHOC category={SiteNavKey.Other} categoryNumber={5} />
}

export default OtherListPage;