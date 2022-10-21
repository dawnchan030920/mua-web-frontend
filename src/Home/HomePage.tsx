import React, { useState } from "react";
import ArticleLayout from "../components/Article/ArticleLayout";

const HomePage: React.FC<{}> = () => {
  return (
    <ArticleLayout>
      <h1 id="header1">This is header1</h1>
    </ArticleLayout>
  );
};

export default HomePage;
