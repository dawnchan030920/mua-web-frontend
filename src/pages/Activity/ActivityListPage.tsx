import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const ActivityListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Activity} list={[
        ]}>
        </CategoryLayout>
    )
}

export default ActivityListPage;