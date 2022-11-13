import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import CategoryLayout from "../../components/Layout/CategoryLayout";
import useAxios from "axios-hooks";
import Card from "../../components/Basic/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";

type SchoolListDataType = {
  school: [
    {
      pid: number;
      name: string;
      img: string;
    }
  ]
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 4rem;
`

const SchoolCardContent = styled.div.attrs<{img: string}>({})<{img: string}>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: hidden;
  border-radius: 0.5rem;
  
  & > #text {
    background-color: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px) saturate(180%);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    transform-origin: bottom;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.2s;
    letter-spacing: 0.2rem;
  }
  
  &:hover > #text {
    transform: translateY(0);
    opacity: 1;
    text-decoration: none;
    color: rgb(73, 109, 193);
  }
  
  & > #text:hover {
    text-decoration: underline solid;
  }
`

const SchoolListPage: React.FC<{}> = () => {
  const [{
    data: schoolData,
    loading: isSchoolLoading,
    error: isSchoolError
  }] = useAxios("/api/school/getSchoolList");
  return (
    <CategoryLayout category={SiteNavKey.School} list={[]}>

      {(!isSchoolLoading && !isSchoolError && (schoolData as SchoolListDataType != null)) && (
        <Container>
          {(schoolData as SchoolListDataType).school.map((value, index, _array) => {
            return (
              <div style={{
                width: `18rem`,
                height: `24rem`,
              }}>
                <Card>
                  <SchoolCardContent img={value.img}>
                    <Link id={"text"} to={`/school/${value.pid}`}>{value.name}</Link>
                  </SchoolCardContent>
                </Card>
              </div>
            )
          })}
        </Container>
      )}
      </CategoryLayout>
  );
};

export default SchoolListPage;
