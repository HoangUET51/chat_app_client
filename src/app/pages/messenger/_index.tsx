import { Box, Grid } from "@mui/material";
import React from "react";
import messager from "../../../assets/images/svg/message.svg";
import menu from "../../../assets/images/svg/menu.svg";
import addPerson from "../../../assets/images/svg/add-message.svg";
import presentation from "../../../assets/images/svg/presentation.svg";

export default function MessengerTemplate() {
  return (
    <div className="flex flex-column justify-center items-center h-[100vh]">
      <Box
        sx={{
          height: "90%",
          width: "80%",
          backgroundColor: "#E0E0E0",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <Grid container columns={16}>
          <Grid item xs={1} className="bg-[#EEEEEE]">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-[40px] mt-10">
                <img src={messager} alt="messager" />
                <img src={menu} alt="menu" />
                <img src={presentation} alt="presentation" />
                <img src={addPerson} alt="addPerson" />
              </div>
              <div className="">avatar</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            oke day
          </Grid>
          <Grid item xs={12}>
            hello
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
