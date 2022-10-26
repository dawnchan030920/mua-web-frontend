import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import {} from "ahooks";
import { ReactComponent as ChevronLeft24 } from "../../assets/icons/chevronLeft24.svg";

type ArticleTitlebarProps = PropsWithChildren<{
  categoryIcon: ReactNode;
  title: string;
}>;

const ArticleTitlebarContainer = styled.div`
  height: 3rem;
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px) brightness(80%);
  background-color: rgba(255, 255, 255, 0.8);
`;

const ArticleTitlebarContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ArticleTitlebar: React.FC<ArticleTitlebarProps> = (props) => {
  return (
    <ArticleTitlebarContainer>
      <ArticleTitlebarContent>
        {props.categoryIcon}
        {props.title}
      </ArticleTitlebarContent>
      <ChevronLeft24 />
    </ArticleTitlebarContainer>
  );
};

export default ArticleTitlebar;
