import React from "react";
import ArticleLayout from "../../components/Layout/ArticleLayout";
import {SiteNavKey} from "../../data/SiteNavData";

const HomePage: React.FC = () => {
  return (
    <>
      <ArticleLayout
          category={SiteNavKey.Home}
          title={"Home Page Article"}
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
