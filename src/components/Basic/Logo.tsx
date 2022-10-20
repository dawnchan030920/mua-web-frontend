import React from "react";
import styled from "styled-components";

const LargeContainer = styled.div`
  height: 36px;
`;

const SmallContainer = styled.div`
  height: 36px;
  width: 36px;
`;

const LogoLarge: React.FC<{}> = () => {
  return <LargeContainer>Large Logo</LargeContainer>;
};

const LogoSmall: React.FC<{}> = () => {
  return (
    <SmallContainer>
      <div
        style={{ backgroundColor: `black`, width: `100%`, height: `100%` }}
      ></div>
    </SmallContainer>
  );
};

export { LogoLarge, LogoSmall };
