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
  Select,
  MenuItem,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import signUp from "../../../assets/images/svg/icon_sign_up.svg";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

interface ISignUp {
  showPassword: boolean;
  handleShowPassword: () => void;
}

export default function SignUpTemplate(props: ISignUp) {
  const { showPassword, handleShowPassword } = props;

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center h-screen w-sreen">
        <div className="flex flex-row min-w-[1024px] min-h-[600px] h-5/6 w-5/6">
          <div className="bg-[#fff] w-6/12 h-full rounded-l-[50px] flex flex-col items-center justify-center border-[1px] border-[#666]">
            <div className="flex flex-col w-[477px] gap-1">
              <span className="text_shadow font-bold text-[40px] text-[#09090B]">
                Create your account
              </span>
              <span className="text_shadow text-[20px] font-normal leading-[24px] text-[#71717A] mb-[25px]">
                Unlock all Features!
              </span>

              <TextField
                sx={{ m: 1 }}
                id="user_sign_up"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                className="shadow-lg"
              />
              <TextField
                sx={{ m: 1 }}
                id="address_sign_up"
                label="Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                className="shadow-lg"
              />
              <TextField
                sx={{ m: 1 }}
                id="phone_sign_up"
                label="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                className="shadow-lg"
              />
              <FormControl sx={{ m: 1 }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender_sign_up"
                  label="Gender"
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ m: 1 }}
                id="email_signup"
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
                <InputLabel htmlFor="signup-password">Password</InputLabel>
                <OutlinedInput
                  id="signup-password"
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
                    Accept terms and conditions
                  </span>
                </div>
              </div>

              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#8098F9",
                }}
                sx={{ m: 1 }}
                variant="contained"
                className="h-[64px] text-[20px] font-bold"
              >
                <span className="text-[20px] font-bold">CREATE ACCOUNT</span>
              </Button>
              <div className="text-center">
                <span className="text_shadow pr-[3px] text-[#71717A] text-[16px]">
                  You have account?
                </span>
                <Link to="/">
                  <span className="text_shadow text-[#8098F9] text-[16px]">
                    Login now
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#6172F3] w-6/12 h-full flex flex-col justify-center items-center rounded-r-[50px]">
            <img src={signUp} alt="device" className="w-2/3 h-2/3" />
            <span className="text_shadow text-[20px] text-[#E0EAFF] font-bold">
              Join us!
            </span>
            <span className="text-[#E0EAFF] text-[16px] opacity-75 font-medium">
              Just go through the boring process of creating an account.
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
