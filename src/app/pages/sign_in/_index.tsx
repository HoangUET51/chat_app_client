import React from "react";
import device from "../../../assets/images/svg/device.svg";
import { Button, Container } from "@mui/material";

export default function SignInTemplate() {
  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center h-screen w-sreen">
        <div className="flex flex-row min-w-[1024px] min-h-[600px] h-5/6 w-5/6">
          <div className="bg-[#fff] w-6/12 h-full rounded-l-[50px] flex flex-col items-center justify-center border-[1px] border-[#555]">
            <span className="font-bold text-[40px] text-[#09090B] drop-shadow-lg shadow-slate-700">
              Login to your Acccount
            </span>
            <span>Welcome back! Select method to log in:</span>
            <div className="lineText flex flex-row">or continue with email</div>
            <Button variant="contained" className="">
              Login
            </Button>
          </div>
          <div className="bg-[#6172F3] w-6/12 h-full flex flex-col justify-center items-center rounded-r-[50px]">
            <img src={device} alt="device" className="w-2/3 h-2/3" />
            <span className="text-[20px] text-[#E0EAFF] drop-shadow-2xl shadow-black font-bold">
              Connect with any device.
            </span>
            <span className="text-[#E0EAFF] text-[16px] opacity-75 font-medium">
              Everything you need is an internet connection.
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
