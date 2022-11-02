import React, { useState, useRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { useFocusWithin, useSet } from "ahooks";
import { SearchBox } from "../Basic/ControllableInput";
import { ReactComponent as Dismiss20 } from "../../assets/icons/dismiss20.svg";
import {NavlinkButton, SubtleButton} from "../Basic/Button";
import {
  Mobile,
  Tablet,
  Desktop,
  MobileOrTablet,
} from "../MediaQuery/MediaQueryWrapper";
import { Section, SiteNavData } from "../../data/SiteNavData";

type NavigationProps = {};

const NavigationPanelMobileStyle = styled.div`
  width: 90vw;
  max-width: 500px;
  height: 55vh;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px) brightness(80%);
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: auto;
  padding: 1.5rem 1.5rem;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NavigationPanelTabletStyle = styled(NavigationPanelMobileStyle)`
  width: 300px;
  height: 100%;
  border-radius: 0 0.75rem 0.75rem 0;
`;

const NavigationPanelDesktopStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.div`
  display: flex;
  width: 90%;
  gap: 0.25rem;
  position: sticky;
  top: 0;
`;

const SearchboxPosition = styled.div`
  height: 2rem;
  width: 100%;
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NavigationHeaderStyle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const NavigationListVerticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

const NavigationListHorizontal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`

const BackContainer = styled.div.attrs<{ isActive: boolean }>({}) <{
  isActive: boolean;
}>`
  display: ${(props) => (props.isActive ? "inline-block" : "none")};
`;

const NavigationPanel: React.FC<PropsWithChildren<{}>> = (props) => {
  return (
    <>
      <Mobile>
        <NavigationPanelMobileStyle>
          {props.children}
        </NavigationPanelMobileStyle>
      </Mobile>
      <Tablet>
        <NavigationPanelTabletStyle>
          {props.children}
        </NavigationPanelTabletStyle>
      </Tablet>
      <Desktop>
        <NavigationPanelDesktopStyle>
          {props.children}
        </NavigationPanelDesktopStyle>
      </Desktop>
    </>
  );
};

const VerticalSeparator = styled.hr`
  width: 0.3px;
  margin: 0 0.5rem;
  border: 0.1px solid rgb(235, 235, 235);
`

const Navigation: React.FC<NavigationProps> = () => {
  const searchboxRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [autoLeaveSearch, setAutoLeaveSearch] = useState<boolean>(true);
  const [sections] = useSet<Section>(SiteNavData);
  const isFocusWithinSearchbox = useFocusWithin(searchboxRef, {
    onFocus: () => setAutoLeaveSearch(false),
  });

  return (
    <NavigationPanel>
      <MobileOrTablet>
        <SearchBar>
          <SearchboxPosition ref={searchboxRef}>
            <SearchBox value={searchText} onChange={setSearchText} />
          </SearchboxPosition>
            <BackContainer isActive={!(!isFocusWithinSearchbox && autoLeaveSearch)}>
                <SubtleButton
                    icon={<Dismiss20 />}
                    click={() => {
                        setAutoLeaveSearch(true);
                    }}
                />
            </BackContainer>
        </SearchBar>

        {!isFocusWithinSearchbox &&
          autoLeaveSearch &&
          Array.from(sections).map((value, index, _array) => {
            return (
              <NavigationSection key={index}>
                <NavigationHeaderStyle>{value.title}</NavigationHeaderStyle>
                <NavigationListVerticle>
                  {value.items.map((value, index, _array) => {
                    return (
                      <NavlinkButton to={value.to} end={value.end} text={value.tag} icon={value.icon} />
                    );
                  })}
                </NavigationListVerticle>
              </NavigationSection>
            );
          })}
        {!(!isFocusWithinSearchbox && autoLeaveSearch) && <></>}
      </MobileOrTablet>

      <Desktop>
        {Array.from(sections).map((value, index, _array) => {
          return (
            <>
              <VerticalSeparator />
              <NavigationListHorizontal>
                {value.items.map((value, index, _array) => {
                  return (
                      <NavlinkButton to={value.to} end={value.end} text={value.tag} icon={value.icon} />
                  )
                })}
              </NavigationListHorizontal>
            </>
          );
        })}
        <VerticalSeparator />
      </Desktop>
    </NavigationPanel>
  );
};

export default Navigation;
