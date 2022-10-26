import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import {} from "ahooks";
import TOC from "../Composite/TOC";
import SiteTitlebar from "../Composite/SiteTitlebar";

type ArticleLayoutProps = PropsWithChildren<{}>;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  return (
    <>
      <SiteTitlebar />
      <TOC
        titles={[
          {
            header: "Header1",
            level: 2,
            id: "header1",
          },
          {
            header: "Header1",
            level: 2,
            id: "header1",
          },
        ]}
      />
      {props.children}
    </>
  );
};

export default ArticleLayout;
