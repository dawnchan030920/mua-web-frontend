import React, { PropsWithChildren } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

type ButtonProps = PropsWithChildren<{
  icon?: ReactNode;
  text?: string;
}>;

const SubtleButtonStyled = styled.button`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: transparent;
  border-color: transparent;
  border-radius: 0.4rem;

  &:hover {
    border: solid 1px rgb(243, 243, 243);
    background-color: rgb(243, 237, 237);
  }
`;

const SubtleButton: React.FC<ButtonProps> = (props) => {
  return (
    <SubtleButtonStyled>
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

export { SubtleButton };
