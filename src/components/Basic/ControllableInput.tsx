import React, { useState } from "react";
import { useControllableValue } from "ahooks";
import styled from "styled-components";
import { ReactComponent as Search20 } from "../../assets/icons/search20.svg";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 2px 6px;
  border-radius: 4px;
  background-color: #fff;
  border-top: #e5e5e5;
  border-left: #e5e5e5;
  border-right: #e5e5e5;
  border-bottom: #868686;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 2px;
  border-style: solid;
  height: 100%;

  &:hover {
    background-color: #fcfcfc;
  }

  &:focus-within {
    background-color: #ffffff;
    border-bottom-color: #476dc5;
  }
`;

const ControllableInputStyle = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;

const ControllablePasswordStyle = styled.input.attrs<{}>({
  type: "password",
})<{}>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;

const SearchBox: React.FC<any> = (props) => {
  const [state, setState] = useControllableValue<string>(props);

  return (
    <InputWrapper>
      <Search20 />
      <ControllableInputStyle
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Search"
      ></ControllableInputStyle>
    </InputWrapper>
  );
};

const TextField: React.FC<any> = (props) => {
  const [state, setState] = useControllableValue<string>(props);

  return (
    <InputWrapper>
      <ControllableInputStyle
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </InputWrapper>
  );
};

const Password: React.FC<any> = (props) => {
  const [state, setState] = useControllableValue<string>(props);

  return (
    <InputWrapper>
      <ControllablePasswordStyle
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </InputWrapper>
  );
};

export { SearchBox, TextField, Password };
