import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import CategoryLayout from "../../components/Layout/CategoryLayout";

const SchoolListPage: React.FC<{}> = () => {
  return (
      <CategoryLayout category={SiteNavKey.School} list={[
          {tag:"武汉大学",to:"/school/whu-1298sidj"},
          {tag:"华中科技大学",to:"/school/hust-pid8y374yyhid"},
          {tag:"清华大学",to:"/school/tsu-2387uihf"},
          {tag:"北京大学",to:"/school/pku-987iuhdsfiuewhuiry"}
      ]}>
          <div>This is the first line.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
          <div>This is school list.</div>
      </CategoryLayout>
  );
};

export default SchoolListPage;
