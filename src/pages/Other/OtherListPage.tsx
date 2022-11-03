import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const OtherListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Other} list={[
            {
                tag: "新联合",
                to: "/other/new"
            }
        ]}></CategoryLayout>
    )
}

export default OtherListPage;