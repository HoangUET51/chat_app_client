import {
  Box,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Tooltip,
} from "@mui/material";
import messager from "../../../assets/images/svg/message.svg";
import menu from "../../../assets/images/svg/menu.svg";
import addPerson from "../../../assets/images/svg/add-message.svg";
import presentation from "../../../assets/images/svg/presentation.svg";
import setting from "../../../assets/images/svg/subtract.svg";
import bell from "../../../assets/images/svg/bell.svg";
import avatar from "../../../assets/images/svg/vector.svg";
import union from "../../../assets/images/svg/Union.svg";
import bgAvatar from "../../../assets/images/avatar-gai-xinh.jpg";
import VideocamIcon from "@mui/icons-material/Videocam";
import Picker, { EmojiClickData } from "emoji-picker-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import { Resizable } from "re-resizable";
import Slider from "react-slick";
import "./style.scss";
import { useState } from "react";

export default function MessengerTemplate() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [width, setWidth] = useState(380);
  const settings = {
    className: "content_special",
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const onEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    setInputStr((prev) => prev + emojiObject.emoji);
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
            onResizeStop={(e, direction, ref, d) => {
              setWidth(width + d.width);
            }}
          >
            <div className="flex flex-col p-2 h-full" id="list_chat">
              <span className="text-[24px] font-bold mt-10 mb-5">Chats</span>
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
              <Slider {...settings}>
                <div className="item_special flex flex-col items-center text-center">
                  <div className="w-[50px] h-[50px] bg-[#E2DEDE] rounded-full flex flex-row m-auto">
                    <img src={union} alt="union" className="m-auto" />
                  </div>
                  <div className="name">Start Call</div>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Vu Van Hoang" placement="top">
                    <div className="name truncate w-[55px]">Vu Van Hoang</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Trang Nguyen" placement="top">
                    <div className="name truncate">Trang Nguyen</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Huy Vu" placement="top">
                    <div className="name truncate">Huy Vu</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Thai Meo" placement="top">
                    <div className="name truncate">Thai Meo</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Huy Van Vu" placement="top">
                    <div className="name truncate">Huy Van Vu</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Hoang Hai Huoc" placement="top">
                    <div className="name truncate">Hoang Hai Huoc</div>
                  </Tooltip>
                </div>
                <div className="item_special flex flex-col items-center text-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={50}
                    height={50}
                  />
                  <Tooltip title="Vu Van Hoang" placement="top">
                    <div className="name truncate">Vu Van Hoang</div>
                  </Tooltip>
                </div>
              </Slider>
              <div className="flex flex-col gap-3 overflow-y-auto h-3/4">
                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2  text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start">
                  <div className="mr-2">
                    <img
                      src={bgAvatar}
                      alt="bell"
                      className="m-auto rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[#262626] font-bold text-[15px]">
                      Vu Van Hoang
                    </span>
                    <div className="flex flex-row gap-2 text-[#AFAEAE]">
                      <div className="truncate w-[230px] text-[13px]">
                        Da xong chua hahaasadsadsdsdsadsdsd
                      </div>
                      <span className="text-[13px]">1:40 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Resizable>
          <Grid
            item
            className="chat_messenger"
            style={{ width: `calc(100% - 60px - ${width}px)` }}
          >
            <div className="flex flex-col mt-10 p-2 w-full border-b-[1px] border-[#c7c5c5]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src={bgAvatar}
                    alt="bell"
                    className="m-auto rounded-full"
                    width={30}
                    height={30}
                  />
                  <div className="ml-2 text-[#262626] font-bold text-[15px]">
                    Vu Van Hoang
                  </div>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center">
                  <CallIcon className="cursor-pointer text-[#3399FF] hover:text-[#FF33FF]" />
                  <VideocamIcon className="cursor-pointer text-[#3399FF] hover:text-[#FF33FF]" />
                  <SearchIcon className="cursor-pointer text-[#3399FF] hover:text-[#FF33FF]" />
                  <MoreHorizIcon className="cursor-pointer text-[#3399FF] hover:text-[#FF33FF]" />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                className="input_style"
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
                onClick={() => setShowPicker((val) => !val)}
              />
              <SearchIcon
                onClick={() => setShowPicker((val) => !val)}
                className="cursor-pointer text-[#3399FF] hover:text-[#FF33FF]"
              />
              {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
