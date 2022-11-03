import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const ActivityListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Activity} list={[
            {
                tag: "生存接力",
                to: "/activity/pid-survival"
            },
            {
                tag: "联合生存",
                to: "/activity/pid-union"
            }
        ]}>
            <div>
                <p>This is the so-called activity list page?</p>
            </div>
        </CategoryLayout>
    )
}

export default ActivityListPage;