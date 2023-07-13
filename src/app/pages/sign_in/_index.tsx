import React from "react";
import device from "../../../assets/images/svg/device.svg";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Checkbox,
  Link,
} from "@mui/material";
import icon_gg from "../../../assets/images/svg/icon-gg.svg";
import icon_fb from "../../../assets/images/svg/icons-fb.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/signin.scss";

interface ISignIn {
  showPassword: boolean;
  handleShowPassword: () => void;
}

export default function SignInTemplate(props: ISignIn) {
  const { showPassword, handleShowPassword } = props;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center h-screen w-sreen">
        <div className="flex flex-row min-w-[1024px] min-h-[600px] h-5/6 w-5/6">
          <div className="bg-[#fff] w-6/12 h-full rounded-l-[50px] flex flex-col items-center justify-center border-[1px] border-[#666]">
            <div className="flex flex-col w-[477px]">
              <span className="text_shadow font-bold text-[40px] text-[#09090B]">
                Login to your Acccount
              </span>
              <span className="text_shadow text-[20px] font-normal leading-[24px] text-[#71717A]">
                Welcome back! Select method to log in:
              </span>
              <div className="flex flex-row gap-10 mt-10">
                <Button
                  variant="outlined"
                  className="w-[215px] h-[60px] shadow-lg"
                >
                  <img
                    src={icon_gg}
                    alt="icon-gg"
                    width={30}
                    className="mr-2"
                  />
                  <span className="text-[22px] font-medium capitalize">
                    Google
                  </span>
                </Button>
                <Button
                  variant="outlined"
                  className="w-[215px] h-[60px] shadow-lg"
                >
                  <img
                    src={icon_fb}
                    alt="icon-fb"
                    width={30}
                    className="mr-2"
                  />
                  <span className="text-[22px] font-medium capitalize">
                    Facebook
                  </span>
                </Button>
              </div>
              <div className="line_text text_shadow text-[#71717a] text-[15px] my-5">
                or continue with email
              </div>

              <TextField
                sx={{ m: 1 }}
                id="email_login"
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

              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="shadow-lg"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Checkbox {...label} />
                  <span className="text-[#71717A] text-[16px] font-normal text_shadow">
                    Remember me
                  </span>
                </div>
                <Link href="#" className="pr-[10px]">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <Button sx={{ m: 1 }} variant="contained">
                LOG IN
              </Button>
              <div className="text-center">
                <span className="text_shadow pr-[3px] text-[#71717A] text-[16px]">
                  Don’t have account?
                </span>
                <Link href="#">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    Create an account
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#6172F3] w-6/12 h-full flex flex-col justify-center items-center rounded-r-[50px]">
            <img src={device} alt="device" className="w-2/3 h-2/3" />
            <span className="text_shadow text-[20px] text-[#E0EAFF] font-bold">
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
