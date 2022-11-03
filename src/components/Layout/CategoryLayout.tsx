import React, {PropsWithChildren, useRef} from "react";
import styled from "styled-components";
import CategoryTitlebar from "../Composite/CategoryTitlebar";
import {SiteNavKey} from "../../data/SiteNavData";
import SiteTitlebar from "../Composite/SiteTitlebar";
import {Mobile, Tablet} from "../MediaQuery/MediaQueryWrapper";
import {useClickAway, useToggle} from "ahooks";
import Navigation from "../Composite/Navigation";
import Login from "../Composite/Login";

type CategoryLayoutProps = PropsWithChildren<{
    category: SiteNavKey;
    list: {
        tag: string;
        to: string;
    }[];
}>

const CategoryTitlebarPosition = styled.div`
  position: sticky;
  top: 0;
`

const MainContainer = styled.div`
  background-color: rgb(247, 247, 249);
  height: 100%;
`

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

const CategoryLayout: React.FC<CategoryLayoutProps> = (props) => {
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
            <SiteTitlebar onNavClick={toggleNavOpen} onManageClick={toggleLoginOpen} />
            <CategoryTitlebarPosition>
                <CategoryTitlebar category={props.category} list={props.list} />
            </CategoryTitlebarPosition>
            <MainContainer>
                {props.children}
            </MainContainer>
            <div ref={navigationPanelRef}>
                <NavigationPosition isActive={navOpen}>
                    <Navigation />
                </NavigationPosition>
            </div>
            <LoginPosition isActive={loginOpen} ref={loginPanelRef}>
                <Login />
            </LoginPosition>
        </>
    )
}

export default CategoryLayout;