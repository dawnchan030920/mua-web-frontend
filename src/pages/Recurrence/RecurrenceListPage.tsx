import React from "react";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const RecurrenceListPage: React.FC<{}> = () => {
    return (
        <CategoryLayout category={SiteNavKey.Recurrence} list={[
        ]}></CategoryLayout>
    )
}

export default RecurrenceListPage;