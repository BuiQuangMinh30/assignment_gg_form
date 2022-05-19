import React from "react";
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from '@material-ui/core';
import  MoreVertIcon  from "@material-ui/icons/MoreVert";
import './Mainbody.css'
import contact from '../images/contact.png'

function Mainbody() {
  return (
    <div className="main_body">
        <div className="mainbody_top">
        <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
            Rexent forms
        </div>
        <div className="mainbody_top_right">
            <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone <ArrowDropDownIcon/></div> 
            <IconButton>
                <StorageIcon style={{fontSize:"16px", color:"black"}}/>
            </IconButton> 
            <IconButton>
                <FolderOpenIcon style={{fontSize:"16px", color:"black"}}/>
            </IconButton>   
        </div>

        </div>
        <div className="mainbody_docs">
            <div className="doc_card">
                <img src={contact} className="doc_image" />
                <div className="doc_card_content">
                    <p style={{fontSize:"16px", color:"black", padding:"2px"}}>Hehehehe</p>
                    <div className="doc_content" style={{fontSize:"12px", color:"gray"}}>
                        <div className="content_left">
                        <StorageIcon style={{fontSize:"12px", color:"white", backgroundColor:"#6e2594", padding:"3px", marginRight:"3px",borderRadius:"2px"}}/>
                        </div>
                        <div className="content_date">30/10/2001</div>
                        <MoreVertIcon  style={{fontSize:"16px", color:"gray"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Mainbody;
