import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const RecurrenceListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Recurrence} list={[
            {
                tag: "武汉大学樱顶",
                to: "/recurrence/sakura"
            }
        ]}></CategoryLayout>
    )
}

export default RecurrenceListPage;