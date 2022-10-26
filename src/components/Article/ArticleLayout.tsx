import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import {} from "ahooks";
import TOC from "../Composite/TOC";
import SiteTitlebar from "../Composite/SiteTitlebar";
import { Mobile } from "../MediaQuery/MediaQueryWrapper";
import ArticleTitlebar from "../Composite/ArticleTitlebar";

type ArticleLayoutProps = PropsWithChildren<{
  titles: {
    header: string;
    level: number;
    id: string;
  }[];
  categoryIcon: ReactNode;
  title: string;
}>;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const SiteTitlebarPosition = styled.div`
  grid-column: 1 / span 7;
`;

const ArticleTitleBarPosition = styled.div`
  grid-column: 1 / span 7;
  position: sticky;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.14);

  z-index: 999;
`;

const Content = styled.div`
  grid-column: 2 / span 5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.14);

  z-index: 1;
`;

const TOCPosition = styled.div`
  position: sticky;
  top: calc(48px + 1rem);
  margin-top: 1rem;
  grid-column: 7;
  height: calc(100vh - 48px - 2rem);
  background-color: rgb(250, 250, 250);
  width: 40px;
  border-radius: 0.6rem;
  box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.12);
  justify-self: center;
  z-index: 2;
`;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  return (
    <StackContainer>
      <SiteTitlebarPosition>
        <SiteTitlebar />
      </SiteTitlebarPosition>
      <ArticleTitleBarPosition>
        <ArticleTitlebar
          categoryIcon={props.categoryIcon}
          title={props.title}
        />
      </ArticleTitleBarPosition>
      <Content>{props.children}</Content>
      <TOCPosition>
        <TOC titles={props.titles} />
      </TOCPosition>
    </StackContainer>
  );
};

export default ArticleLayout;
