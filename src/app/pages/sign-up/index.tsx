import React, { useState } from "react";
import SignUpTemplate from "./_index";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@app/validations/auth.validation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      case "PHONE":
        setPhone(event.target.value);
        break;
      case "ADDRESS":
        setAddress(event.target.value);
        break;
      case "USER_NAME":
        setUserName(event.target.value);
        break;
      case "GENDER":
        setGender(event.target.value);
        break;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <SignUpTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      handleOnChange={handleOnChange}
      email={email}
      password={password}
      phone={phone}
      address={address}
      userName={userName}
      gender={gender}
    />
  );
}
