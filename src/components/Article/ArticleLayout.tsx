import React, { PropsWithChildren, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Desktop, Tablet, Mobile } from "../MediaQuery/MediaQueryWrapper";
import { LogoLarge, LogoSmall } from "../Basic/Logo";
import { Link } from "react-router-dom";
import { SubtleButton } from "../Basic/Button";
import SearchIconUrl from "../../assets/search28.svg";
import ListIconUrl from "../../assets/list28.svg";
import ChevronUpUrl from "../../assets/chevronup28.svg";
import ReadingListUrl from "../../assets/readinglist28.svg";
import {
  useMount,
  useEventListener,
  useBoolean,
  useControllableValue,
} from "ahooks";
import ControllableInput from "../Basic/ControllableInput";
import ControllabelInput from "../Basic/ControllableInput";
import StyledNavLink from "../Styled/StyledNavLink";
import { Header1 } from "../Basic/Header";
import TOC from "../Basic/TOC";

type TitleType = {
  header: string;
  level: number;
  id: string;
};

type ArticleLayoutProps = PropsWithChildren<{ titles: TitleType[]; }>;

const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
`;

const MobileSide = styled.div`
  z-index: 999;

  position: sticky;
  top: 0;

  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6vh;
  height: 100vh;
  padding: 8px 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background-color: #fafafa;
`;



const MobileMain = styled.div`
  grid-column: 2;
`;

const SearchBoxStyle = styled.div.attrs({
  id: "searchbox",
})`
  display: flex;
  background-color: #fafafa;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.4);
  padding: 9px 12px;
  height: 100%;
  display: none;
`;

const MobileSearchBoxContainer = styled.div.attrs<{ active: boolean }>(
  () => {}
)<{
  active: boolean;
}>`
  z-index: 1;
  position: sticky;
  bottom: 0px;
  transition: height 0.15s;
  height: 0px;
  ${(props) => {
    if (props.active) {
      return `height: 52px;
              & #searchbox {
                display: block;
              }`;
    }
  }}
`;

const SideBarBoxStyle = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px 18px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(20px) saturate(80%);
`;

const MobileSideBarContainer = styled.div.attrs<{ active: boolean }>(() => {})<{
  active: boolean;
}>`
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 48px;
  height: 100%;
  width: calc(100% - 48px);
  transform: translateX(-100%);
  transition: transform 1s cubic-bezier(0.8,0,0.1,1);
  ${(props) => {
    if (props.active)
      return `
       transform: translateX(0px); 
      `;
  }}
`;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  function refreshCurrentId(): void {
    let tempId: string = "";
    let element: HTMLElement | null;
    let top;
    props.titles.forEach((value, _index, _array) => {
      element = document.getElementById(value.id);
      top = element?.getBoundingClientRect()?.top;
      if (top != undefined && top <= 30) {
        tempId = value.id;
      }
    });
    setCurrentId(tempId);
  }

  useMount(() => refreshCurrentId());

  useEventListener("scroll", () => {
    refreshCurrentId();
  });

  const [currentId, setCurrentId] = useState<string>();
  const [isSearchOpen, { toggle: toggleSearchOpen }] = useBoolean(false);
  const [isNavOpen, { toggle: toggleNavOpen }] = useBoolean(false);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <Mobile>
        <MobileContainer>
          <MobileSide>
            <Link to={""}>
              <LogoSmall />
            </Link>
            <SubtleButton
              icon={<img src={ListIconUrl} alt="first class list" />}
              onClick={() => toggleNavOpen()}
            />
            <SubtleButton
              icon={<img src={ReadingListUrl} alt="sibling articles" />}
            />
            <TOC titles={props.titles} currentId = {currentId} />
            <a href="#">
              <SubtleButton
                icon={<img src={ChevronUpUrl} alt="back tp top" />}
              />
            </a>
            <SubtleButton
              icon={<img src={SearchIconUrl} alt="search" />}
              onClick={() => toggleSearchOpen()}
            />
          </MobileSide>
          <MobileMain>
            <div>{props.children}</div>
            <MobileSearchBoxContainer active={isSearchOpen}>
              <SearchBoxStyle>
                <ControllabelInput
                  value={searchText}
                  onChange={setSearchText}
                />
              </SearchBoxStyle>
            </MobileSearchBoxContainer>
            <MobileSideBarContainer active={isNavOpen}>
              <SideBarBoxStyle>
                <div>
                  <Header1>站点</Header1>
                </div>
                <StyledNavLink>首页</StyledNavLink>
                <StyledNavLink>学校</StyledNavLink>
                <StyledNavLink>联合活动</StyledNavLink>
                <StyledNavLink>联合项目</StyledNavLink>
                <StyledNavLink>复原</StyledNavLink>
              </SideBarBoxStyle>
            </MobileSideBarContainer>
          </MobileMain>
        </MobileContainer>
      </Mobile>
    </>
  );
};

export default ArticleLayout;
