import React from "react";
import styled from "styled-components";

const TemperaryLogo = styled.div`
  width: 8rem;
  height: 2rem;
  background-color: black;
`;

const Logo: React.FC<{}> = () => {
  return <TemperaryLogo />;
};

export default Logo;
