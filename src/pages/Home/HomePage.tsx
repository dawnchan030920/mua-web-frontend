import React from "react";
import ArticleLayout from "../../components/Layout/ArticleLayout";
import { ReactComponent as Home24 } from "../../assets/icons/home24.svg";

const HomePage: React.FC = () => {
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
          {
            header:
              "This is some long title I don't how he came up with such a bad idea...",
            level: 2,
            id: "long",
          },
        ]}
        categoryLink="/"
        categoryIcon={<Home24 />}
      >
        <h2 id="header1">This is header1</h2>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <h2 id="header2">This is header2</h2>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <h2 id="long">
          This is some long title I don't how he came up with such a bad idea...
        </h2>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
        <p>This time, do I win?</p>
      </ArticleLayout>
    </>
  );
};

export default HomePage;
