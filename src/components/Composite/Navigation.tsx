import React, { useState, ReactNode, useRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { useFocusWithin } from "ahooks";
import { Link, NavLink } from "react-router-dom";
import { SearchBox } from "../Basic/ControllableInput";
import { ReactComponent as Dismiss20 } from "../../assets/icons/dismiss20.svg";
import { SubtleButton } from "../Basic/Button";
import { Mobile, Tablet } from "../MediaQuery/MediaQueryWrapper";

type NavigationProps = {
  sections: {
    title: string;
    links: { tag: string; icon: ReactNode; to: string; end: boolean }[];
  }[];
};

const NavigationPanelMobileStyle = styled.div`
  width: 90vw;
  max-width: 500px;
  height: 55vh;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px) brightness(80%);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
  overflow: auto;
  padding: 1.5rem 1.5rem;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NavigationPanelTabletStyle = styled(NavigationPanelMobileStyle)`
  width: 300px;
  height: 100%;
  border-top-left-radius: 0rem;
  border-top-right-radius: 0.75rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0.75rem;
`;

const SearchBar = styled.div`
  display: flex;
  width: 90%;
  gap: 0.25rem;
  position: sticky;
  top: 0px;
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
const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

const NavigationItemContainer = styled(NavLink)`
  text-decoration: none;
`;

const NavigationItemStyleBase = styled.span`
  &::after {
    content: "";
    display: block;
    height: 1.2px;
    width: 0%;
    transition: width 0.5s;
    transition-timing-function: cubic-bezier(0.33, 0, 0.1, 1);
  }
  &:hover::after {
    width: 100%;
  }
`;

const NavigationItemStyle = styled(NavigationItemStyleBase)`
  font-size: 1rem;
  text-decoration: none;
  color: black;

  &::after {
    background-color: black;
  }
`;

const NavigationItemActiveStyle = styled(NavigationItemStyleBase)`
  color: rgb(71, 109, 197);
  font-weight: 500;

  &::after {
    background-color: rgb(71, 109, 197);
    height: 2px;
  }
`;

const NavigationItemContentStyle = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

const BackContainer = styled.div.attrs<{ isActive: boolean }>({})<{
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
    </>
  );
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const searchboxRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [autoLeaveSearch, setAutoLeaveSearch] = useState<boolean>(true);
  const isFocusWithinSearbox = useFocusWithin(searchboxRef, {
    onFocus: () => setAutoLeaveSearch(false),
  });

  return (
    <NavigationPanel>
      <SearchBar>
        <BackContainer isActive={!(!isFocusWithinSearbox && autoLeaveSearch)}>
          <SubtleButton
            icon={<Dismiss20 />}
            click={() => {
              setAutoLeaveSearch(true);
            }}
          />
        </BackContainer>
        <SearchboxPosition ref={searchboxRef}>
          <SearchBox value={searchText} onChange={setSearchText} />
        </SearchboxPosition>
      </SearchBar>

      {!isFocusWithinSearbox &&
        autoLeaveSearch &&
        props.sections.map((value, index, _array) => {
          return (
            <NavigationSection key={index}>
              <NavigationHeaderStyle>{value.title}</NavigationHeaderStyle>
              <NavigationList>
                {value.links.map((value, index, _array) => {
                  return (
                    <NavigationItemContainer
                      key={index}
                      to={value.to}
                      end={value.end}
                    >
                      {({ isActive }) => {
                        return isActive ? (
                          <NavigationItemActiveStyle>
                            <NavigationItemContentStyle>
                              {value.icon}
                              {value.tag}
                            </NavigationItemContentStyle>
                          </NavigationItemActiveStyle>
                        ) : (
                          <NavigationItemStyle>
                            <NavigationItemContentStyle>
                              {value.icon}
                              {value.tag}
                            </NavigationItemContentStyle>
                          </NavigationItemStyle>
                        );
                      }}
                    </NavigationItemContainer>
                  );
                })}
              </NavigationList>
            </NavigationSection>
          );
        })}
      {!(!isFocusWithinSearbox && autoLeaveSearch) && <></>}
    </NavigationPanel>
  );
};

export default Navigation;
