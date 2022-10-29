import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import {} from "ahooks";
import { SubtleButton } from "../Basic/Button";
import Logo from "../Basic/Logo";
import { ReactComponent as List24 } from "../../assets/icons/list24.svg";
import { ReactComponent as Person24 } from "../../assets/icons/person24.svg";

type SiteTitlebarProps = {
  onNavClick?: () => void;
  onManageClick?: () => void;
};

const SiteTitlebarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 3rem;
  padding: 0.25rem 0.5rem;
`;

const LeftContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: start;
  align-items: center; ;
`;

const CenterContainer = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const SiteTitlebar: React.FC<SiteTitlebarProps> = (props) => {
  return (
    <SiteTitlebarContainer>
      <LeftContainer>
        <div id="nav-button">
          <SubtleButton icon={<List24 />} click={props.onNavClick} />
        </div>
      </LeftContainer>
      <CenterContainer>
        <Logo />
      </CenterContainer>
      <RightContainer>
        <div id="manage-button">
          <SubtleButton icon={<Person24 />} click={props.onManageClick} />
        </div>
      </RightContainer>
    </SiteTitlebarContainer>
  );
};

export default SiteTitlebar;
