import React, { PropsWithChildren } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  click?: () => void;
};

type LinkButtonProps = ButtonProps & { link: string };

const SubtleButtonStyled = styled.button`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: transparent;
  border-radius: 0.4rem;
  border-color: transparent;

  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;

const OutlineButtonStyled = styled.button`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: rgb(250, 250, 250);
  border-radius: 0.4rem;
  border-style: solid;
  border-top-color: rgb(200, 200, 200);
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-width: 1px;

  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;

const LinkButtonStyled = styled(Link)`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3 rem;
  background-color: transparent;
  border-radius: 0.4rem;
  border-color: transparent;
  text-decoration: none;
  color: black;
`;

const SubtleButton: React.FC<ButtonProps> = (props) => {
  return (
    <SubtleButtonStyled onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </SubtleButtonStyled>
  );
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <LinkButtonStyled to={props.link} onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </LinkButtonStyled>
  );
};

const OutlineButton: React.FC<ButtonProps> = (props) => {
  return (
    <OutlineButtonStyled onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </OutlineButtonStyled>
  );
};

export { SubtleButton, LinkButton, OutlineButton };
