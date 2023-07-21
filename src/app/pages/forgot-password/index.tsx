import React, { useEffect, useState } from "react";
import SignUpTemplate from "./_index";
import { useSelector } from "react-redux";
import { GlobalState } from "@app/store";
import HttpService from "@core/services/http/http.service";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const user = useSelector((store: GlobalState) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = HttpService.getAccessToken() || "";

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <SignUpTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
    />
  );
}
