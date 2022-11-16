import React from "react"
import {useParams} from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleHOC from "../../components/Composite/ArticleHOC";

const SchoolPage: React.FC<{}> = () => {
    const { pid } = useParams();
    return (
      <ArticleHOC pid={pid as string} category={SiteNavKey.School} categoryNumber={"1"} isSchool={true} />
    )
}

export default SchoolPage;