import React from "react";
import styled from "styled-components";
import { Mobile } from "../MediaQuery/MediaQueryWrapper";

type TitleType = {
  header: string;
  level: number;
  id: string;
};

type TOCProps = { titles: TitleType[]; currentId: string | undefined };

type TOCItemProps = {
  isActive: boolean;
};

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
  gap: calc(0.5vh + 0.2rem);
  overflow: auto;
  padding: 1.2vh 0px;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const MobileTOCItem = styled.div.attrs<TOCItemProps>(() => {})<TOCItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  padding: 8px 0px;
  border-radius: 6px;
  ${(props) => {
    if (props.isActive)
      return `
        background-color: #EBEBEB;
        & #activeindicator {
          background-color: #456dc9;
          height: 88%;
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
  color: #000000;
  white-space: nowrap;
  margin: 0px auto;
`;

const MobileTOCItemActiveindicator = styled.div.attrs({
  id: "activeindicator",
})`
  width: 5px;
  background-color: transparent;
  border-radius: 4px;
  height: 0px;
  transition: all 0.18s;
`;

const TOC: React.FC<TOCProps> = (props) => {
  return (
    <Mobile>
      <MobileTOCContainer>
        <MobileTOCList>
          {props.titles.map((value, _index, _array) => {
            return (
              <MobileTOCItem isActive={value.id == props.currentId}>
                <MobileTOCItemActiveindicator />
                <MobileTOCItemText href={"#" + value.id}>
                  {value.header}
                </MobileTOCItemText>
              </MobileTOCItem>
            );
          })}
        </MobileTOCList>
      </MobileTOCContainer>
    </Mobile>
  );
};

export default TOC;
