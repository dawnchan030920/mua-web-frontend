import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { ReactComponent as ChevronLeft24 } from "../../assets/icons/chevronLeft24.svg";
import { SubtleButton, LinkButton } from "../Basic/Button";
import { MobileOrTablet } from "../MediaQuery/MediaQueryWrapper";

type ArticleTitlebarProps = PropsWithChildren<{
  categoryIcon: ReactNode;
  categoryLink: string;
  title: string;
  func: () => void;
}>;

const ArticleTitlebarContainer = styled.div`
  height: 3rem;
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  
  @media (min-width: 992px) {
    padding: 0.25rem 14vw;
  }
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
        <LinkButton link={props.categoryLink} icon={props.categoryIcon} />
        {props.title}
      </ArticleTitlebarContent>
      <MobileOrTablet>
        <SubtleButton icon={<ChevronLeft24 />} click={props.func} />
      </MobileOrTablet>
    </ArticleTitlebarContainer>
  );
};

export default ArticleTitlebar;
