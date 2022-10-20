import React, { ReactElement } from "react";
import styled from "styled-components";

type ButtonProps = {
  icon?: ReactElement;
  text?: string;
};

const ButtonStyle = styled.div`
  height: 40px;
  min-width: 40px;
  max-width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainerStyle = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainerStyle = styled.span`
  width: auto;
`;

const SubtleButtonStyle = styled(ButtonStyle)`
  background-color: transparent;
  &:hover {
    backdrop-filter: saturate(160%) blur(30px) brightness(92%);
    cursor: pointer;
  }
  &:active {
    backdrop-filter: saturate(160%) blur(30px) brightness(87%);
  }
`;

const SubtleButton: React.FC<ButtonProps> = (props) => {
  return (
    <SubtleButtonStyle>
      <IconContainerStyle>{props.icon}</IconContainerStyle>
      <TextContainerStyle>{props.text}</TextContainerStyle>
    </SubtleButtonStyle>
  );
};

export { SubtleButton };
