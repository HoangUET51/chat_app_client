import React, { useState } from "react";
import SignInTemplate from "./_index";
import { SelectChangeEvent } from "@mui/material";
import AuthService from "@app/services/http/auth.service";
import StorageService from "@core/services/storage";
import { ACCESS_TOKEN_KEY } from "@app/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUser } from "@app/store/auth/auth.action";
import useObservable from "@core/hooks/use-observable.hook";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remembered, setRemembered] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { subscribeOnce } = useObservable();

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
      case "REMEMBERED":
        setEmail(email);
        setPassword(password);
        setRemembered(!remembered);
        break;
    }
  };

  const handleLogin = () => {
    subscribeOnce(
      AuthService.login(email.trim(), password.trim()),
      (response) => {
        dispatch(
          storeUser({ user: response.user, accessToken: response.accessToken })
        );

        if (remembered) {
          StorageService.set(ACCESS_TOKEN_KEY, response.accessToken);
        } else {
          StorageService.setSession(ACCESS_TOKEN_KEY, response.accessToken);
        }

        navigate("/messenger");
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
      remembered={remembered}
      handleLogin={handleLogin}
    />
  );
}
