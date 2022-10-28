import React, { PropsWithChildren } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonProps = PropsWithChildren<{
  icon?: ReactNode;
  text?: string;
  click?: () => void;
}>;

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
      {props.text != null ||
        (props.children != null && (
          <>
            <div>
              {props.text}
              {props.children}
            </div>
          </>
        ))}
    </SubtleButtonStyled>
  );
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <LinkButtonStyled to={props.link} onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null ||
        (props.children != null && (
          <>
            <div>
              {props.text}
              {props.children}
            </div>
          </>
        ))}
    </LinkButtonStyled>
  );
};

export { SubtleButton, LinkButton };
