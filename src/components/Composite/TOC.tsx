import { useEventListener } from "ahooks";
import React, { useState } from "react";
import styled from "styled-components";
import { Mobile } from "../MediaQuery/MediaQueryWrapper";

type TitleType = {
  header: string;
  level: number;
  id: string;
};

type TOCProps = { titles: TitleType[] };

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
    height: 0.5rem;
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
    height: 0.5rem;
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
  gap: 0.6rem;
  overflow: auto;
  padding: 0.5rem 0px;

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
  padding: 0.5rem 0px;
  border-radius: 0.35rem;
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
  font-size: 1rem;
  color: #000000;
  white-space: nowrap;
  margin: 0px auto;
`;

const MobileTOCItemActiveindicator = styled.div.attrs({
  id: "activeindicator",
})`
  width: 0.25rem;
  background-color: transparent;
  border-radius: 0.25rem;
  height: 0px;
  transition: all 0.18s;
`;

const TOC: React.FC<TOCProps> = (props) => {
  function refreshCurrentId(): string {
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
    return tempId;
  }

  const [currentId, setCurrentId] = useState<string>(refreshCurrentId());
  useEventListener("scroll", () => setCurrentId(refreshCurrentId));

  return (
    <Mobile>
      <MobileTOCContainer>
        <MobileTOCList>
          {props.titles.map((value, _index, _array) => {
            return (
              <MobileTOCItem isActive={value.id == currentId}>
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
