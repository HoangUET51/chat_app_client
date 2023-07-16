import React from "react";
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
  SelectChangeEvent,
} from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import { TextSignIn } from "@app/constants/signin.const";
import device from "../../../assets/images/svg/device.svg";
import icon_gg from "../../../assets/images/svg/icon-gg.svg";
import icon_fb from "../../../assets/images/svg/icons-fb.svg";
import "../../styles/signin.scss";

interface ISignIn {
  showPassword: boolean;
  handleShowPassword: () => void;
  handleOnChange: (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    type: string
  ) => void;
  email: string;
  password: string;
  handleLogin: () => void;
}

export default function SignInTemplate(props: ISignIn) {
  const {
    showPassword,
    handleShowPassword,
    handleOnChange,
    email,
    password,
    handleLogin,
  } = props;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center h-screen w-sreen">
        <div className="flex flex-row min-w-[1024px] min-h-[600px] h-5/6 w-5/6">
          <div className="bg-[#fff] w-6/12 h-full rounded-l-[50px] flex flex-col items-center justify-center border-[1px] border-[#666]">
            <div className="flex flex-col w-[477px]">
              <span className="text_shadow font-bold text-[40px] text-[#09090B]">
                {TextSignIn.TITLE_LOGIN}
              </span>
              <span className="text_shadow text-[20px] font-normal leading-[24px] text-[#71717A]">
                {TextSignIn.SUB_TITLE}
              </span>
              <div className="flex flex-row gap-10 mt-10">
                <Button
                  variant="outlined"
                  className="w-[215px] h-[60px] shadow-lg"
                  style={{
                    borderRadius: 10,
                  }}
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
                  style={{
                    borderRadius: 10,
                  }}
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
                {TextSignIn.TEXT_INSTRUCT}
              </div>

              <TextField
                autoFocus
                required
                error={email ? false : true}
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
                value={email ?? ""}
                onChange={(event) => handleOnChange(event, "EMAIL")}
              />

              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="shadow-lg"
                required
                error={password ? false : true}
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
                  value={password ?? ""}
                  onChange={(event) => handleOnChange(event, "PASSWORD")}
                />
              </FormControl>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Checkbox {...label} />
                  <span className="text-[#71717A] text-[16px] font-normal text_shadow">
                    {TextSignIn.TEXT_REMEMBER}
                  </span>
                </div>
                <Link className="pr-[10px]" to="/forgot-password">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    {TextSignIn.TEXT_FORGOT}
                  </span>
                </Link>
              </div>

              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#8098F9",
                }}
                sx={{ m: 1 }}
                variant="contained"
                className="h-[64px] text-[20px] font-bold"
                onClick={handleLogin}
              >
                <span className="text-[20px] font-bold">LOG IN</span>
              </Button>
              <div className="text-center">
                <span className="text_shadow pr-[3px] text-[#71717A] text-[16px]">
                  {TextSignIn.TEXT_ACCOUNT}
                </span>
                <Link to="/sign-up">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    {TextSignIn.TEXT_CREATE}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#6172F3] w-6/12 h-full flex flex-col justify-center items-center rounded-r-[50px]">
            <img src={device} alt="device" className="w-2/3 h-2/3" />
            <span className="text_shadow text-[20px] text-[#E0EAFF] font-bold">
              {TextSignIn.TEXT_CONNECT}
            </span>
            <span className="text-[#E0EAFF] text-[16px] opacity-75 font-medium">
              {TextSignIn.TEXT_EVERY}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
