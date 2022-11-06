import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import CategoryLayout from "../../components/Layout/CategoryLayout";

const SchoolListPage: React.FC<{}> = () => {
  return (
      <CategoryLayout category={SiteNavKey.School} list={[
      ]}>
      </CategoryLayout>
  );
};

export default SchoolListPage;
