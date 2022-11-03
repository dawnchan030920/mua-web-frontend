import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const ProjectListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Project} list={[
            {
                tag: "Logo 征集",
                to: "/project/logo"
            }
        ]}></CategoryLayout>
    )
}

export default ProjectListPage;