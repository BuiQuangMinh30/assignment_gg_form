import React from "react";
import fontImage from "../images/forms_2020q4_48dp.png";
import {FiStar, FiSettings} from "react-icons/fi"
import {AiOutlineEye} from 'react-icons/ai'
import {Icon, IconButton} from "@material-ui/core"
import avatar from "../images/avatar.jpg";
import {IoMdFolderOpen} from 'react-icons/io'

import ColorLensIcon  from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Avatar from "@material-ui/core/Avatar";
import  Button  from "@material-ui/core/Button";
import './Formheader.css'

function Formheader() {
  return (
    <div className="form_header">
        <div className="form_header_left">
            <img src={fontImage} style={{height:"45px",width:"40px"}}/>
            <input type="text" placeholder="Nhap" className="form_name" ></input>
            <IoMdFolderOpen className="form_header_icon" style={{marginRight:"10px"}}></IoMdFolderOpen>
            <FiStar className="form_header_icon" style={{marginRight:"10px"}}></FiStar>
            <span style={{fontSize:"12px", fontWeight:"600"}}>All changes saved in Drive</span>
        </div>
        <div className="form_header_right">
            <IconButton>
                <ColorLensIcon size="small" className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <AiOutlineEye style={{height:"24px", width:"24px"}} size="small" className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <FiSettings style={{height:"24px", width:"24px"}} size="small" className="form_header_icon"/>
            </IconButton>
            <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
            <IconButton>
                <MoreVertIcon size="small" className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <Avatar style={{height:"30px", width:"30px"}} src={avatar}/>
            </IconButton>

        </div>
    </div>
  );
}

export default Formheader;
