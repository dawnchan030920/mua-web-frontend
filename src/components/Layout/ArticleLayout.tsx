import React, { PropsWithChildren, ReactNode, useRef } from "react";
import styled from "styled-components";
import { useToggle, useClickAway } from "ahooks";
import TOC from "../Composite/TOC";
import SiteTitlebar from "../Composite/SiteTitlebar";
import { Mobile } from "../MediaQuery/MediaQueryWrapper";
import ArticleTitlebar from "../Composite/ArticleTitlebar";
import Navigation from "../Composite/Navigation";
import Login from "../Composite/Login";
import HomePage from "../../pages/Home/HomePage";
import { ReactComponent as Home20 } from "../../assets/icons/home20.svg";
import { ReactComponent as Balloon20 } from "../../assets/icons/balloon20.svg";
import { ReactComponent as Call20 } from "../../assets/icons/call20.svg";

type ArticleLayoutProps = PropsWithChildren<{
  passageTitles: {
    header: string;
    level: number;
    id: string;
  }[];
  categoryLink: string;
  categoryIcon: ReactNode;
  title: string;
}>;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const SiteTitlebarPosition = styled.div`
  grid-column: 1 / span 9;
`;

const ArticleTitleBarPosition = styled.div`
  grid-column: 1 / span 9;
  position: sticky;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);

  z-index: 999;
`;

const Content = styled.div`
  grid-column: 2 / span 7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);

  z-index: 1;
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
  background-color: rgb(250, 250, 250);
  width: ${(props) => (props.isActive ? `40px` : `0px`)};
  border-radius: 0.6rem;
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.28);
  justify-self: end;
  z-index: 2;
  transition: width 0.2s;
  & * {
    display: ${(props) => (props.isActive ? `auto` : `none`)};
  }
`;

const NavigationPosition = styled.div.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
  transform: translateY(${(props) => (props.isActive ? `0` : `55vh`)});
  transition: transform 0.7s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
`;

const LoginPosition = styled.div.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 6;
  transform: translateY(${(props) => (props.isActive ? `0` : `250px`)});
  transition: transform 0.7s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
`;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  const [tocOpen, { toggle: toggleTocOpen }] = useToggle();
  const [navOpen, { toggle: toggleNavOpen }] = useToggle();
  const [loginOpen, { toggle: toggleLoginOpen }] = useToggle();
  const navigationPanelRef = useRef<HTMLDivElement>(null);
  const loginPanelRef = useRef<HTMLDivElement>(null);
  useClickAway(
    () => {
      if (navOpen == true) {
        toggleNavOpen();
      }
    },
    [
      navigationPanelRef,
      document.getElementById("nav-button"),
      document.getElementById("manage-button"),
    ],
    ["click", "scroll", "contextmenu"]
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
            categoryLink={props.categoryLink}
            categoryIcon={props.categoryIcon}
            title={props.title}
            func={toggleTocOpen}
          />
        </ArticleTitleBarPosition>
        <Content>{props.children}</Content>
        <TOCPosition isActive={tocOpen}>
          <TOC titles={props.passageTitles} />
        </TOCPosition>
      </StackContainer>
      <NavigationPosition isActive={navOpen} ref={navigationPanelRef}>
        <Navigation
          sections={[
            {
              title: "Site",
              links: [
                {
                  tag: "Home",
                  to: "/",
                  icon: <Home20 />,
                  end: true,
                },
                {
                  tag: "Activities",
                  to: "/activity",
                  icon: <Balloon20 />,
                  end: false,
                },
              ],
            },
            {
              title: "Function",
              links: [
                {
                  tag: "Contact",
                  to: "/contact",
                  icon: <Call20 />,
                  end: false,
                },
              ],
            },
          ]}
        />
      </NavigationPosition>
      <LoginPosition isActive={loginOpen} ref={loginPanelRef}>
        <Login />
      </LoginPosition>
    </>
  );
};

export default ArticleLayout;
