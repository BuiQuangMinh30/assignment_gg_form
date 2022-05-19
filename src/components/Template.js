import React from "react";
import  MoreVertIcon  from "@material-ui/icons/MoreVert";
import {Icon, IconButton} from "@material-ui/core"
import  UnfoldMoreIcon  from "@material-ui/icons/UnfoldMore"; 
import './Template.css'

import blank from '../images/forms-blank-googlecolors.png'
import party from '../images/party_invite.png'
import contact from '../images/contact.png'
import uuid from "react-uuid"
import { useNavigate  } from "react-router-dom";


function Template() {
  const navigate  = useNavigate();
  const createForms = () => {
      const id_ = uuid();
      navigate(`/form/${id_}`)
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
                <span style={{fontSize:"16px", color:"#202124"}} >Start a new form</span>
                </div>
        <div className="template_right">
            <div className="Gallery_button">
                Template Gallery
                <UnfoldMoreIcon fontSize="small"/>
            </div>
            <IconButton>
                <MoreVertIcon fontSize="small"/>
            </IconButton>
        </div>
      </div>
      
      <div className="template_body">
        <div className="card" onClick={createForms}>
            <img src={blank} alt="" className="card_images"/>
           <p className="card-title">Blank</p>
        </div>
        <div className="card">
            <img src={party} alt="" className="card_images"/>
            <p className="card-title">Party Invite</p>
        </div>
        <div className="card">
            <img src={contact} alt="" className="card_images"/>
            <p className="card-title">Contact Information</p>
        </div>
        </div>
    </div>
  );
}

export default Template;
