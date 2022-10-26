import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Mobile } from "../MediaQuery/MediaQueryWrapper";
import { Link } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";

type NavigationProps = PropsWithChildren<{
  links: {
    text: string;
    to: string;
  }[];
}>;

const PopupNavigationStyle = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px 18px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(20px) saturate(80%);
`;

const PopupNavigationItemStyle = styled(Link)`
  display: block;
  width: auto;
  height: auto;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  color: #000;
  border: solid transparent 1.5px;

  transition: all 0.2s;

  &:hover {
    background-color: rgb(235, 235, 235);
    border: solid rgb(224, 224, 224) 1.5px;
    transform: translateY(-2px);
  }
`;

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <Mobile>
        <PopupNavigationStyle>
          <div>{props.children}</div>
          {props.links.map((value, _index, _array) => {
            return (
              <PopupNavigationItemStyle to={value.to}>
                {value.text}
              </PopupNavigationItemStyle>
            );
          })}
        </PopupNavigationStyle>
      </Mobile>
    </>
  );
};

export default Navigation;
