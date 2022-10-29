import React, { useState } from "react";
import ArticleLayout from "../../components/Layout/ArticleLayout";
import { ReactComponent as Home24 } from "../../assets/icons/home24.svg";
import useAxios from "axios-hooks";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <ArticleLayout
        title="Home Test Article"
        passageTitles={[
          {
            header: "This is header 1",
            level: 2,
            id: "header1",
          },
          {
            header: "This is header 2",
            level: 2,
            id: "header2",
          },
        ]}
        categoryLink="/"
        categoryIcon={<Home24 />}
      >
        <h2 id="header1">This is header1</h2>
        <h2 id="header2">This is header2</h2>
      </ArticleLayout>
    </>
  );
};

export default HomePage;
