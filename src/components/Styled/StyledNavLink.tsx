import React, { PropsWithChildren } from "react";
import NavlLink from "react-router-dom";
import styled from "styled-components";

type StyledNavLinkProps = PropsWithChildren<{}>;

const StyledNavLinkStyled = styled.div`
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #0e53db;
  padding: 6px 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  border: solid 1px #d6d6d6;
  &:hover {
    border-color: transparent;
    background-color: #ebebeb;
    font-weight: 600;
    box-shadow: 0 1px 1px 1px rgb(0, 0, 0, 0.15);
    transform: translateY(-1px);
    text-decoration: underline;
  }
`;

const StyledNavLink: React.FC<StyledNavLinkProps> = (props) => {
    return (
        <StyledNavLinkStyled>{props.children}</StyledNavLinkStyled>
    )
};

export default StyledNavLink;
