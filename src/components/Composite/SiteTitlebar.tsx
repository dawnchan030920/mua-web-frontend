import React from "react";
import styled from "styled-components";
import { SubtleButton } from "../Basic/Button";
import Logo from "../Basic/Logo";
import { ReactComponent as List24 } from "../../assets/icons/list24.svg";
import { ReactComponent as Person24 } from "../../assets/icons/person24.svg";
import { MobileOrTablet, Desktop } from "../MediaQuery/MediaQueryWrapper";
import Navigation from "../Composite/Navigation";
import {SearchBox} from "../Basic/ControllableInput";

type SiteTitlebarProps = {
  onNavClick?: () => void;
  onManageClick?: () => void;
};

const SiteTitlebarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 3rem;
  padding: 0.25rem 0.5rem;
  background-color: rgb(243, 243, 243);
`;

const LeftContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: start;
  align-items: center;
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
  gap: 0.25rem;
`;

const SitebarSearchboxPosition = styled.div`
  height: 32px;
`

const SiteTitlebar: React.FC<SiteTitlebarProps> = (props) => {
  return (
    <SiteTitlebarContainer>
      <MobileOrTablet>
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
      </MobileOrTablet>

      <Desktop>
        <LeftContainer>
          <Logo />
        </LeftContainer>
        <CenterContainer>
          <Navigation />
        </CenterContainer>
        <RightContainer>
          <SitebarSearchboxPosition>
            <SearchBox />
          </SitebarSearchboxPosition>
          <div id="manage-button">
            <SubtleButton icon={<Person24 />} click={props.onManageClick} />
          </div>
        </RightContainer>
      </Desktop>
    </SiteTitlebarContainer>
  );
};

export default SiteTitlebar;
