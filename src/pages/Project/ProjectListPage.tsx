import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const ProjectListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Project} list={[
        ]}></CategoryLayout>
    )
}

export default ProjectListPage;