import { useEventListener } from "ahooks";
import React, { useState } from "react";
import styled from "styled-components";
import { MobileOrTablet, Desktop } from "../MediaQuery/MediaQueryWrapper";

type TitleType = {
  header: string;
  level: number;
  id: string;
};

type TOCProps = { titles: TitleType[] };

type TOCItemProps = {
  isActive: boolean;
};

const VerticleTOCContainer = styled.div`
  box-shadow: 1px 0 8px rgba(0, 0, 0, 0.28);
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
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
    height: 0.9rem;
    background-image: linear-gradient(rgba(250, 250, 250, 1),
    rgba(250, 250, 250, 0));
  }

  &::after {
    z-index: 2;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.9rem;
    background-image: linear-gradient(rgba(250, 250, 250, 0),
    rgba(250, 250, 250, 1));
  }
`;

const HorizontalTOCContainer = styled(VerticleTOCContainer)`
  box-shadow: none;
  background-color: transparent;
  &::before {
    content: "";
    display: none;
  }
  &::after {
    content: "";
    display: none;
  }
`;

const VerticleTOCList = styled.div`
  width: 100%;
  z-index: 1;
  writing-mode: vertical-rl;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.6rem;
  overflow: auto;
  padding: 0.5rem 0;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const HorizontalTOCList = styled(VerticleTOCList)`
  writing-mode: horizontal-tb;
  flex-direction: column;
`;

const VerticleTOCItem = styled.div.attrs<TOCItemProps>(() => {})<TOCItemProps>`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  padding: 0.5rem 0;
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

const HorizontalTOCItem = styled.div.attrs<TOCItemProps>(
  () => {}
)<TOCItemProps>`
  width: 100%;
  word-wrap: break-word;
  background-color: transparent;
  display: flex;
  ${(props) => {
    if (props.isActive)
      return `
        & #text {
          color: rgb(69, 109, 201);
          font-weight: 600;
        }
        & #activeindicator {
          background-color: rgb(69, 109, 201);
          height: 100%;
        }
    `;
  }}
`;

const VerticleTOCItemText = styled.a.attrs({
  id: "text",
})`
  text-decoration: none;
  font-size: 1rem;
  color: #000000;
  white-space: nowrap;
  margin: 0 auto;
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HorizontalTOCItemText = styled(VerticleTOCItemText)`
  white-space: normal;
  margin-left: 0.5rem;
`;

const VerticleTOCItemActiveindicator = styled.div.attrs({
  id: "activeindicator",
})`
  width: 0.25rem;
  background-color: transparent;
  border-radius: 0.25rem;
  height: 0;
  transition: all 0.18s;
`;

const HorizontalTOCItemActiveindicator = styled(VerticleTOCItemActiveindicator)`
  width: 0.2rem;
  border-radius: 0.1rem;
`;

const HorizontalTOCHeader = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  font-size: x-large;
  font-weight: 600;
  letter-spacing: 0.4rem;
  color: rgb(175, 175, 175);
`;

const TOC: React.FC<TOCProps> = (props) => {
  function refreshCurrentId(): string {
    let tempId: string = "";
    let element: HTMLElement | null;
    let top;
    props.titles.forEach((value, _index, _array) => {
      element = document.getElementById(value.id);
      top = element?.getBoundingClientRect()?.top;
      if (top != undefined && top <= 80) {
        tempId = value.id;
      }
    });
    return tempId;
  }

  const [currentId, setCurrentId] = useState<string>(refreshCurrentId());
  useEventListener("scroll", () => setCurrentId(refreshCurrentId));

  return (
    <>
      <MobileOrTablet>
        <VerticleTOCContainer>
          <VerticleTOCList>
            {props.titles.map((value, index, _array) => {
              return (
                <VerticleTOCItem isActive={value.id == currentId} key={index}>
                  <VerticleTOCItemActiveindicator />
                  <VerticleTOCItemText href={"#" + value.id}>
                    {value.header}
                  </VerticleTOCItemText>
                </VerticleTOCItem>
              );
            })}
          </VerticleTOCList>
        </VerticleTOCContainer>
      </MobileOrTablet>
      <Desktop>
        <HorizontalTOCContainer>
          <HorizontalTOCHeader>
            TOC({props.titles.length})
          </HorizontalTOCHeader>
          <HorizontalTOCList>
            {props.titles.map((value, index, _array) => {
              return (
                <HorizontalTOCItem isActive={value.id == currentId} key={index}>
                  <HorizontalTOCItemActiveindicator />
                  <HorizontalTOCItemText href={"#" + value.id}>
                    {value.header}
                  </HorizontalTOCItemText>
                </HorizontalTOCItem>
              );
            })}
          </HorizontalTOCList>
        </HorizontalTOCContainer>
      </Desktop>
    </>
  );
};

export default TOC;
