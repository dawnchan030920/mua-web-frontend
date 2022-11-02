import React, { PropsWithChildren, useRef } from "react";
import styled from "styled-components";
import { useToggle, useClickAway } from "ahooks";
import TOC from "../Composite/TOC";
import SiteTitlebar from "../Composite/SiteTitlebar";
import {
  Mobile,
  Tablet,
  MobileOrTablet,
  Desktop,
} from "../MediaQuery/MediaQueryWrapper";
import ArticleTitlebar from "../Composite/ArticleTitlebar";
import Navigation from "../Composite/Navigation";
import Login from "../Composite/Login";
import {SiteNavMap, SiteNavKey} from "../../data/SiteNavData";

type ArticleLayoutProps = PropsWithChildren<{
  passageTitles: {
    header: string;
    level: number;
    id: string;
  }[];
  category: SiteNavKey;
}>;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 3.5fr 1fr;
  }
  background-color: rgb(247, 247, 249);
`;

const SiteTitlebarPosition = styled.div`
  grid-column: 1 / span 9;
  @media (min-width: 992px) {
    grid-column: 1 / span 3;
  }
`;

const ArticleTitleBarPosition = styled.div`
  grid-column: 1 / span 9;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);

  z-index: 5;

  @media (min-width: 992px) {
    grid-column: 1 / span 3;
  }
`;

const Content = styled.div`
  grid-column: 2 / span 7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  background-color: white;
  z-index: 1;
  @media (min-width: 992px) {
    grid-column: 2;
  }
`;

const TOCPosition = styled.div.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  position: sticky;
  top: calc(48px + 1rem);
  margin-top: 1rem;
  margin-right: 1.2vw;
  grid-column: 9;
  height: calc(100vh - 48px - 2rem);
  width: ${(props) => (props.isActive ? `40px` : `0px`)};
  justify-self: end;
  z-index: 2;
  transition: width 0.2s;
  & * {
    display: ${(props) => (props.isActive ? `auto` : `none`)};
  }
  @media (min-width: 992px) {
    grid-column: 3;
    width: ${(props) => (props.isActive ? `15vw` : `0vw`)};
  }
`;

const NavigationPositionMobile = styled.div.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  transform: translateY(${(props) => (props.isActive ? `0` : `55vh`)});
  transition: transform 0.7s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
`;

const NavigationPositionTablet = styled(NavigationPositionMobile).attrs<{
  isActive: boolean;
}>({})<{
  isActive: boolean;
}>`
  position: fixed;
  left: 0;
  top: 48px;
  right: calc(100vw - 300px);
  height: calc(100vh - 48px);
  transform: translateX(${(props) => (props.isActive ? `0` : `-300px`)});
  width: 300px;
`;

const LoginPosition = styled.div.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 6;
  transform: translateY(${(props) => (props.isActive ? `0` : `250px`)});
  transition: transform 0.7s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
`;

const NavigationPosition: React.FC<PropsWithChildren<{ isActive: boolean }>> = (
  props
) => {
  return (
    <>
      <Mobile>
        <NavigationPositionMobile isActive={props.isActive}>
          {props.children}
        </NavigationPositionMobile>
      </Mobile>
      <Tablet>
        <NavigationPositionTablet isActive={props.isActive}>
          {props.children}
        </NavigationPositionTablet>
      </Tablet>
    </>
  );
};

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  const [tocOpen, { toggle: toggleTocOpen }] = useToggle();
  const [navOpen, { toggle: toggleNavOpen }] = useToggle();
  const [loginOpen, { toggle: toggleLoginOpen }] = useToggle();
  const navigationPanelRef = useRef<HTMLDivElement>(null);
  const loginPanelRef = useRef<HTMLDivElement>(null);
  useClickAway(
    () => {
      if (navOpen) {
        toggleNavOpen();
      }
    },
    [navigationPanelRef, document.getElementById("nav-button")],
    ["click", "scroll", "contextmenu"]
  );
  useClickAway(
    () => {
      if (loginOpen) {
        toggleLoginOpen();
      }
    },
    [loginPanelRef, document.getElementById("manage-button")],
    ["click", "contextmenu"]
  );

  return (
    <>
      <StackContainer>
        <SiteTitlebarPosition>
          <SiteTitlebar
            onNavClick={toggleNavOpen}
            onManageClick={toggleLoginOpen}
          />
        </SiteTitlebarPosition>
        <ArticleTitleBarPosition>
          <ArticleTitlebar
            categoryLink={SiteNavMap[props.category].to}
            categoryIcon={SiteNavMap[props.category].icon}
            title={SiteNavMap[props.category].tag}
            func={toggleTocOpen}
          />
        </ArticleTitleBarPosition>
        <Content>{props.children}</Content>
        <MobileOrTablet>
          <TOCPosition isActive={tocOpen}>
            <TOC titles={props.passageTitles} />
          </TOCPosition>
        </MobileOrTablet>
        <Desktop>
          <TOCPosition isActive={true}>
            <TOC titles={props.passageTitles} />
          </TOCPosition>
        </Desktop>
      </StackContainer>
      <div ref={navigationPanelRef}>
        <NavigationPosition isActive={navOpen}>
          <Navigation />
        </NavigationPosition>
      </div>
      <LoginPosition isActive={loginOpen} ref={loginPanelRef}>
        <Login />
      </LoginPosition>
    </>
  );
};

export default ArticleLayout;
