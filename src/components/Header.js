import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import fontImage from "../images/forms_2020q4_48dp.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpg";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <TemporaryDrawer />
        <img src={fontImage} alt="" className="font_image" />
        <div className="info">Forms</div>
      </div>
      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" name="search" placeholder="Search" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={avatar} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
