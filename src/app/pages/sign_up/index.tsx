import React, { useEffect, useState } from "react";
import SignUpTemplate from "./_index";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

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

  const registerSchema = object({
    userName: string()
      .nonempty("Name is required")
      .max(32, "Name must be less than 100 characters"),
    address: string()
      .nonempty("Address is required")
      .max(32, "Address must be less than 100 characters"),
    phone: string()
      .nonempty("Phone is required")
      .max(10, "Phone must be 10 characters"),
    gender: string().nonempty("Gender is required"),
    email: string().nonempty("Email is required").email("Email is invalid"),
    password: string()
      .nonempty("Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string().nonempty("Please confirm your password"),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

  type RegisterInput = TypeOf<typeof registerSchema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {};

  return (
    <SignUpTemplate
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
      handleSubmit={handleSubmit}
      register={register}
      onSubmitHandler={onSubmitHandler}
      methods={methods}
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
