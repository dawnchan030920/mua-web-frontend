import React from "react";
import { useParams } from "react-router-dom";
import ArticleLayout from "../../components/Layout/ArticleLayout";
import { SiteNavKey } from "../../data/SiteNavData";

const OtherPage: React.FC<{}> = () => {
    const {pid} = useParams();
    return (
        <ArticleLayout passageTitles={[
        ]} category={SiteNavKey.Other} title={``}>
        </ArticleLayout>
    )
}

export default OtherPage;