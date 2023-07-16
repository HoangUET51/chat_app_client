import React, { useState } from "react";
import SignInTemplate from "./_index";
import { SelectChangeEvent } from "@mui/material";
import AuthService from "@app/services/http/auth.service";
import StorageService from "@core/services/storage";
import { ACCESS_TOKEN_KEY } from "@app/constants";
import HttpService from "@core/services/http/http.service";
import { useNavigate } from "react-router-dom";
import { AuthActionType } from "@app/store/auth";
import { LoginResponse } from "@app/types";
import { ofType } from "redux-observable";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    type: string
  ) => {
    switch (type) {
      case "EMAIL":
        setEmail(event.target.value);
        break;
      case "PASSWORD":
        setPassword(event.target.value);
        break;
    }
  };

  const handleLogin = () => {
    HttpService.subscribeOnce<LoginResponse>(
      AuthService.login(email.trim(), password.trim()),
      (res) => {
        const authenEpic = (action$: any, state$: any) =>
          action$.pipe(ofType(AuthActionType.STORE_AUTH));

        StorageService.set(ACCESS_TOKEN_KEY, res.accessToken);
        navigate("/forgot-password");
      }
    );
  };

  return (
    <SignInTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
      handleOnChange={handleOnChange}
      email={email}
      password={password}
      handleLogin={handleLogin}
    />
  );
}
