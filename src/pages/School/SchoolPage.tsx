import React from "react"
import { useParams } from "react-router-dom";
import {SiteNavKey} from "../../data/SiteNavData";
import ArticleLayout from "../../components/Layout/ArticleLayout";

const SchoolPage: React.FC<{}> = () => {
    const { pid } = useParams();
    return (
        <ArticleLayout passageTitles={[
        ]} category={SiteNavKey.School} title={``}>
        </ArticleLayout>
    )
}

export default SchoolPage;