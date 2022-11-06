import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const OtherListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Other} list={[
        ]}></CategoryLayout>
    )
}

export default OtherListPage;