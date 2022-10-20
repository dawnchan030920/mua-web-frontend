import React, { useState } from "react";
import ArticleLayout from "../components/Article/ArticleLayout";

const HomePage: React.FC<{}> = () => {
  return (
    <ArticleLayout
      titles={[
        {
          header: "Header1",
          level: 1,
          anchor: "header1",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "中文标题2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2 with Whitespaces",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
        {
          header: "Header2",
          level: 2,
          anchor: "header2",
        },
      ]}
    >
      <div>This is home page.</div>
    </ArticleLayout>
  );
};

export default HomePage;
