import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Desktop, Tablet, Mobile } from "../MediaQuery/MediaQueryWrapper";
import { LogoLarge, LogoSmall } from "../Basic/Logo";
import { Link } from "react-router-dom";
import { SubtleButton } from "../Basic/Button";
import SearchIconUrl from "../../assets/search28.svg";
import ListIconUrl from "../../assets/list28.svg";
import ChevronUpUrl from "../../assets/chevronup28.svg";
import ReadingListUrl from "../../assets/readinglist28.svg";

type ArticleLayoutProps = PropsWithChildren<{
  titles: {
    header: string;
    anchor: string;
    level: number;
  }[];
}>;

const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(48px, 10%) 1fr;
`;

const MobileSide = styled.div`
  position: sticky;

  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1vh;
  height: 100vh;
  padding: 8px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
`;

const MobileTOCContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::before {
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.9vh;
    background-image: linear-gradient(
      rgba(250, 250, 250, 1),
      rgba(250, 250, 250, 0.4)
    );
  }
  &::after {
    z-index: 2;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.9vh;
    background-image: linear-gradient(
      rgba(250, 250, 250, 0.4),
      rgba(250, 250, 250, 1)
    );
  }
`;

const MobileTOCList = styled.div`
  z-index: 1;
  writing-mode: vertical-rl;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: calc(2.6vh + 0.2rem);
  overflow: auto;
  padding: 1.2vh 0px;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const MobileTOCItem = styled.a`
  text-decoration: none;
  font-size: calc(12px + 1.2vw);
  color: #616161;
  font-weight: 600;
  white-space: nowrap;
`;

const MobileMain = styled.div`
  grid-column: 2;
`;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
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
            />
            <SubtleButton
              icon={<img src={ReadingListUrl} alt="sibling articles" />}
            />
            <MobileTOCContainer>
              <MobileTOCList>
                {props.titles.map((value, _index, _array) => {
                  return (
                    <MobileTOCItem href={"#" + value.anchor}>
                      {value.header}
                    </MobileTOCItem>
                  );
                })}
              </MobileTOCList>
            </MobileTOCContainer>
            <SubtleButton icon={<img src={ChevronUpUrl} alt="back tp top" />} />
            <SubtleButton icon={<img src={SearchIconUrl} alt="search" />} />
          </MobileSide>

          <MobileMain></MobileMain>
        </MobileContainer>
      </Mobile>
    </>
  );
};

export default ArticleLayout;
