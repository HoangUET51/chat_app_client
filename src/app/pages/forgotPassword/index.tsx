import React, { useState } from "react";
import SignUpTemplate from "./_index";
import { useSelector } from "react-redux";
import { GlobalState } from "@app/store";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const user = useSelector((store: GlobalState) => store.auth);

  return (
    <SignUpTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
    />
  );
}
