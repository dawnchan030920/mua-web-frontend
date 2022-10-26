import React, { PropsWithChildren, useState } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";
import styled from "styled-components";
import { useMap, useMount } from "ahooks";

type TitleBarProps = {
  start: ReactNode[] | undefined;
  center: ReactNode[] | undefined;
  end: ReactNode[] | undefined;
};

const TitleBarStyle = styled.div`
  grid-column: 1fr auto 1fr;
  box-shadow: 0 -4px 8px rgb(0 0 0 / 40%);
  background-color: rgb(250, 250, 250);
`;

const StartContainer = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const CenterContainer = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EndContainer = styled.div`
  grid-column: 3;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const TitleBar: React.FC<TitleBarProps> = (props) => {
  return (
    <TitleBarStyle>
      <StartContainer>
        {props.start?.map((value) => {
          return value;
        })}
      </StartContainer>
      <CenterContainer>
        {props.center?.map((value) => {
          return value;
        })}
      </CenterContainer>
      <EndContainer>
        {props.end?.map((value) => {
          return value;
        })}
      </EndContainer>
    </TitleBarStyle>
  );
};

export default TitleBar;
