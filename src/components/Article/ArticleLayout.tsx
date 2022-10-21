import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import { Desktop, Tablet, Mobile } from "../MediaQuery/MediaQueryWrapper";
import { LogoLarge, LogoSmall } from "../Basic/Logo";
import { Link } from "react-router-dom";
import { SubtleButton } from "../Basic/Button";
import SearchIconUrl from "../../assets/search28.svg";
import ListIconUrl from "../../assets/list28.svg";
import ChevronUpUrl from "../../assets/chevronup28.svg";
import ReadingListUrl from "../../assets/readinglist28.svg";

type ArticleLayoutProps = PropsWithChildren<{}>;

type TitleType = {
  header: string;
  level: number;
  anchor: string;
};

type MobileTOCItemProps = {
  isActive: boolean;
};

const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(48px, 10%) 1fr;
`;

const MobileSide = styled.div`
  position: sticky;
  top: 0;

  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1vh;
  height: 100vh;
  padding: 8px 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background-color: #fafafa;
`;

const MobileTOCContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: auto;
  &::before {
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.4vh;
    background-image: linear-gradient(
      rgba(250, 250, 250, 1),
      rgba(250, 250, 250, 0.2)
    );
  }
  &::after {
    z-index: 2;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.4vh;
    background-image: linear-gradient(
      rgba(250, 250, 250, 0.2),
      rgba(250, 250, 250, 1)
    );
  }
`;

const MobileTOCList = styled.div`
  width: 100%;
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

const MobileTOCItem = styled.div.attrs<MobileTOCItemProps>(
  () => {}
)<MobileTOCItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  ${(props) => {
    if (props.isActive)
      return `
        & #activeindicator {
          background-color: #707070;
        }
        & #text {
          font-weight: 600;
        }
    `;
  }}
`;

const MobileTOCItemText = styled.a.attrs({
  id: "text",
})`
  text-decoration: none;
  font-size: calc(12px + 1.2vw);
  color: #616161;
  white-space: nowrap;
  margin: 0px auto;
`;

const MobileTOCItemActiveindicator = styled.div.attrs({
  id: "activeindicator",
})`
  width: 5px;
  height: 88%;
  background-color: transparent;
  border-radius: 4px;
`;

const MobileMain = styled.div`
  grid-column: 2;
`;

const ArticleLayout: React.FC<ArticleLayoutProps> = (props) => {
  const [titles, setTitles] = useState<TitleType[]>([
    {
      header: "Header1",
      level: 1,
      anchor: "#header1"
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
                {titles.map((value, index, _array) => {
                  return (
                    <MobileTOCItem isActive={index == currentIndex}>
                      <MobileTOCItemActiveindicator />
                      <MobileTOCItemText href={value.anchor}>
                        {value.header}
                      </MobileTOCItemText>
                    </MobileTOCItem>
                  );
                })}
              </MobileTOCList>
            </MobileTOCContainer>
            <SubtleButton icon={<img src={ChevronUpUrl} alt="back tp top" />} />
            <SubtleButton icon={<img src={SearchIconUrl} alt="search" />} />
          </MobileSide>

          <MobileMain>
            {props.children}
          </MobileMain>
        </MobileContainer>
      </Mobile>
    </>
  );
};

export default ArticleLayout;
