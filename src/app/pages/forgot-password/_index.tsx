import React from "react";
import { Button, Container, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import forgotPassword from "../../../assets/images/svg/forgot-password.svg";
import "../../styles/signup.scss";

interface IForgotPassword {
  showPassword: boolean;
  handleShowPassword: () => void;
}

export default function ForgotPasswordTemplate(props: IForgotPassword) {
  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center h-screen w-sreen">
        <div className="flex flex-row min-w-[1024px] min-h-[600px] h-5/6 w-5/6">
          <div className="bg-[#fff] w-6/12 h-full rounded-l-[50px] flex flex-col items-center justify-center border-[1px] border-[#666]">
            <div className="flex flex-col w-[477px] gap-1">
              <span className="text_shadow font-bold text-[40px] text-[#09090B]">
                Forgot your password?
              </span>
              <span className="text_shadow text-[20px] font-normal leading-[24px] text-[#71717A] mb-[25px]">
                Enter your Email and get OTP to verification.
              </span>
              <TextField
                sx={{ m: 1 }}
                id="email_forgot"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                className="shadow-lg"
              />
              <TextField
                sx={{ m: 1 }}
                id="repeat_email_forgot"
                label="Repeat Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                className="shadow-lg"
              />

              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#8098F9",
                }}
                sx={{ m: 1 }}
                variant="contained"
                className="h-[64px] text-[20px] font-bold"
              >
                <span className="text-[20px] font-bold">SEND MAIL</span>
              </Button>
              <div className="text-center">
                <span className="text_shadow pr-[3px] text-[#71717A] text-[16px]">
                  You have password?
                </span>
                <Link to="/login">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#6172F3] w-6/12 h-full flex flex-col justify-center items-center rounded-r-[50px]">
            <img src={forgotPassword} alt="device" className="w-2/3 h-2/3" />
            <span className="text_shadow text-[20px] text-[#E0EAFF] font-bold">
              Forgot your password?
            </span>
            <span className="text-[#E0EAFF] text-[16px] opacity-75 font-medium">
              You can get them back easily.
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
