import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import useAxios from "axios-hooks";
import Card from "../../components/Basic/Card";

type SchoolListDataType = {
  school: [
    {
      pid: number;
      name: string;
      img: string;
    }
  ]
}

const SchoolListPage: React.FC<{}> = () => {
  const [{
    data: schoolData,
    loading: isSchoolLoading,
    error: isSchoolError
  }] = useAxios("/api/school/getSchoolList");
  return (
    <CategoryLayout category={SiteNavKey.School} list={[]}>

      {(!isSchoolLoading && !isSchoolError && (schoolData as SchoolListDataType != null)) && (
        <div style={{
          display: `flex`,
          flexDirection: `column`,
          padding: `2rem 4rem`,
          gap: `2.5rem`
        }}>
          {(schoolData as SchoolListDataType).school.map((value, index, _array) => {
            return (
              <Card key={index}>
                <div style={{
                  display: `flex`,
                  gap: `0.6rem`
                }}>
                  <img style={{
                    width: `20%`,
                    objectFit: `cover`,
                    boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
                    maxWidth: `10rem`
                  }}
                       src={value.img}
                       alt={value.name}
                  />
                  <div style={{
                    fontSize: `2rem`,
                    fontWeight: `600`,
                    margin: `1.5rem 0`
                  }}>
                    {value.name}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </CategoryLayout>
  );
};

export default SchoolListPage;
