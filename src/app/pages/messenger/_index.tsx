import { Box, Grid, Paper, InputBase, IconButton } from "@mui/material";
import React, { useState } from "react";
import messager from "../../../assets/images/svg/message.svg";
import menu from "../../../assets/images/svg/menu.svg";
import addPerson from "../../../assets/images/svg/add-message.svg";
import presentation from "../../../assets/images/svg/presentation.svg";
import setting from "../../../assets/images/svg/subtract.svg";
import bell from "../../../assets/images/svg/bell.svg";
import avatar from "../../../assets/images/svg/vector.svg";
import SearchIcon from "@mui/icons-material/Search";
import { ResizableBox } from "react-resizable";
import { Resizable } from "re-resizable";

export default function MessengerTemplate() {
  const [resize, setResize] = useState({
    isResizing: false,
    position: [100, 50],
  });

  const onResizeStart = (event: unknown, direction: any) => {
    if (direction === "right") {
      setResize({
        ...resize,
        isResizing: true,
      });
    }
  };

  return (
    <div className="flex flex-column justify-center items-center h-[100vh]">
      <Box
        sx={{
          height: "70%",
          width: "65%",
          backgroundColor: "#FAFAFA",
          borderRadius: "20px",
        }}
      >
        <Grid container columns={22} className="h-full">
          <Grid item className="h-full w-[60px] bg-[#D8D8D8] rounded-l-[20px]">
            <div className="flex flex-col items-center p-1 justify-between h-full">
              <div className="flex flex-col items-center gap-[40px] mt-8">
                <img src={messager} alt="messager" />
                <img src={menu} alt="menu" />
                <img src={presentation} alt="presentation" />
                <img src={addPerson} alt="addPerson" />
              </div>
              <div className="flex flex-col gap-[20px] mb-3">
                <img src={bell} alt="bell" />
                <img src={setting} alt="setting" />
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </Grid>
          <Resizable
            defaultSize={{
              width: 380,
              height: "100%",
            }}
            className="border-r-[1px] border-[#c7c5c5]"
            minWidth={200}
            maxWidth={500}
            maxHeight="100%"
            minHeight="100%"
          >
            <Grid item className="w-full">
              <div className="flex flex-col p-2">
                <span className="">Chats</span>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#EEEEEE",
                    boxShadow: "0 0 #0000",
                  }}
                >
                  <InputBase
                    sx={{
                      ml: 1,
                      flex: 1,
                      color: "#000000",
                      fontSize: "15px",
                    }}
                    placeholder="Search (Ctrl + K)"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
            </Grid>
          </Resizable>

          <Grid item>hello</Grid>
        </Grid>
      </Box>
    </div>
  );
}