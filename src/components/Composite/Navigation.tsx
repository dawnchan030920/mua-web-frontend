import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import {} from "ahooks";
import { Link, NavLink } from "react-router-dom";
import { SearchBox } from "../Basic/ControllableInput";

type NavigationProps = {
  sections: {
    title: string;
    links: { tag: string; icon: ReactNode; to: string; end: boolean }[];
  }[];
};

const NavigationPanel = styled.div`
  width: 90vw;
  height: 55vh;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px) brightness(80%);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  overflow: auto;
  padding: 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SearchPosition = styled.div`
  height: 2rem;
  width: 90%;
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

const Navigation: React.FC<NavigationProps> = (props) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <NavigationPanel>
      <SearchPosition>
        <SearchBox value={searchText} onChange={setSearchText} />
      </SearchPosition>
      {props.sections.map((value, index, _array) => {
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
    </NavigationPanel>
  );
};

export default Navigation;
