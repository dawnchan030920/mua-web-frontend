import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type HeaderProps = PropsWithChildren<{}>;

const Header1Style = styled.h1`

`;

const Header1: React.FC<HeaderProps> = (props) => {
  return <Header1Style>{props.children}</Header1Style>;
};

export { Header1 };
