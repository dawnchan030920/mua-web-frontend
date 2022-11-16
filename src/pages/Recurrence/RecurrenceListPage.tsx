import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleListHOC from "../../components/Composite/ArticleListHOC";

const RecurrenceListPage: React.FC = () => {
    return <ArticleListHOC category={SiteNavKey.Recurrence} categoryNumber={"3"} />
}

export default RecurrenceListPage;