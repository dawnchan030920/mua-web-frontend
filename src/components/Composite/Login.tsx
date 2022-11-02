import React, { useState } from "react";
import styled from "styled-components";
import { Password, TextField } from "../Basic/ControllableInput";
import { OutlineButton } from "../Basic/Button";
import { ReactComponent as Upload20 } from "../../assets/icons/upload20.svg";
import { ReactComponent as Person20 } from "../../assets/icons/person20.svg";
import useAxios from "axios-hooks";

type LoginProps = {};

const LoginPanel = styled.div`
  width: 75vw;
  height: 250px;
  max-width: 350px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px) brightness(80%);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1rem;
  border: none;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.12);
`;

const AccountPosition = styled.div`
  width: 80%;
  height: 2rem;
`;

const PasswordPosition = styled.div`
  width: 80%;
  height: 2rem;
`;

const Login: React.FC<LoginProps> = () => {
  const [{}, loginRequest] = useAxios(
    {
      url: "/api/auth/login",
      method: "POST",
    },
    { manual: true }
  );

  const loginAction = async () => {
    const {
      data: {},
    } = await loginRequest({
      data: {
        username: username,
        passwd: password,
      },
    });
  };

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <LoginPanel>
      <h1>登录</h1>
      <AccountPosition>
        <TextField
          value={username}
          onChange={setUsername}
          icon={<Person20 />}
        />
      </AccountPosition>
      <PasswordPosition>
        <Password value={password} onChange={setPassword} />
      </PasswordPosition>
      <OutlineButton icon={<Upload20 />} text="Submit" click={loginAction} />
    </LoginPanel>
  );
};

export default Login;
