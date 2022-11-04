import React from "react";
import styled from "styled-components";
import logoUrl from "../../assets/img/logo.png";

const LogoContainer = styled.div`
  height: 2rem;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 0.8rem;
  letter-spacing: 0.5rem;
  font-weight: bolder;
`

const Logo: React.FC<{}> = () => {
  return (
      <LogoContainer>
        <img src={logoUrl} style={{
          height: `2rem`,
        }} alt={"logo"} />
        MUA
      </LogoContainer>
  )
};

export default Logo;
