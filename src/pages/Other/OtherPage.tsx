import React from "react";
import {useParams} from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleHOC from "../../components/Composite/ArticleHOC";

const OtherPage: React.FC<{}> = () => {
    const {pid} = useParams();
    return (
      <ArticleHOC pid={pid as string} category={SiteNavKey.Other} categoryNumber={"5"} />
    )
}

export default OtherPage;