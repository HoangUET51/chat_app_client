import React, { useState } from "react";
import SignInTemplate from "./_index";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <SignInTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
    />
  );
}
