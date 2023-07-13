import React, { useState } from "react";
import SignUpTemplate from "./_index";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <SignUpTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
    />
  );
}