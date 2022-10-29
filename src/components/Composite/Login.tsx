import React, { useState } from "react";
import styled from "styled-components";
import {} from "ahooks";
import { Password, TextField } from "../Basic/ControllableInput";
import { OutlineButton } from "../Basic/Button";
import { ReactComponent as Upload20 } from "../../assets/icons/upload20.svg";
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
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12);
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
  const [{ error }, loginRequest] = useAxios(
    {
      url: "/api/auth/login",
      method: "POST",
    },
    { manual: true }
  );

  const loginAction = async () => {
    const {
      data: { status, token, code, cause },
    } = await loginRequest({
      data: {
        username: username,
        passwd: password,
      },
    });
    setStatus(status);
    setToken(token);
    setCode(code);
    setCause(cause);
  };

  if (error) return <span>error</span>;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [status, setStatus] = useState();
  const [token, setToken] = useState();
  const [code, setCode] = useState();
  const [cause, setCause] = useState();

  return (
    <LoginPanel>
      <h1>Login</h1>
      <pre>
        {status}
        {token}
        {code}
        {cause}
      </pre>
      <AccountPosition>
        <TextField value={username} onChange={setUsername} />
      </AccountPosition>
      <PasswordPosition>
        <Password value={password} onChange={setPassword} />
      </PasswordPosition>
      <OutlineButton icon={<Upload20 />} text="Submit" click={loginAction} />
    </LoginPanel>
  );
};

export default Login;
