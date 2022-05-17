import React from 'react'
import  MenuIcon  from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@mui/styles';

import  Divider from '@material-ui/core/Divider'
// import {FiSettings} from 'react-icons/fi'
// import {BsQuestionCircle} from 'react-icons/bs'
import formimage from '../images/forms_2020q4_48dp.png'
import excelsheetimage from '../images/Excel-logo.jpg'
import docimage from '../images/document-logo.png'
import slidesimage from '../images/slide-logo.png'
import driveimage from '../images/ggdrive-logo.png'

const useStyle = makeStyles({
  listItem: {
    marginLeft:"20px",marginRight:"14px",fontWeight:"500", color:"gray"
  },
  listItemGG: {
    fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', sans-serif,Arial"
  }
})

function TemporaryDrawer() {
    const classes = useStyle();
    const [state, setState]= React.useState({
        left: false
    })
   
    const toggleDrawer = (anchor, open) => (event)=>{
        setState({...state, [anchor]: open})
    }
    const list = (anchor) => (
      <div style={{width:"250px"}} role="presentation">
        <Divider/>
        <List>
          <ListItem>
            <ListItemText style={{fontSize:"48px", marginLeft:"5px"}}>
              <span className={classes.listItemGG} style={{fontWeight:"700", color:"blue"}}>G</span>
              <span className={classes.listItemGG} style={{ color:"red"}}>o</span>
              <span className={classes.listItemGG} style={{ color:"yellow"}}>o</span>
              <span className={classes.listItemGG} style={{ color:"blue"}}>g</span>
              <span className={classes.listItemGG} style={{ color:"green"}} >l</span>
              <span className={classes.listItemGG} style={{marginRight:"10px", color:"red"}}>e</span>
              <span className={classes.listItemGG} style={{color:"#5f6368"}}>Docs</span>
            </ListItemText>
          </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
          <ListItem className="list_item">
            <img src={docimage} style={{height:"20px",width:"20px"}}/>
            <div className={classes.listItem}>Docs</div>
          </ListItem>

          <ListItem className="list_item">
            <img src={excelsheetimage} style={{height:"20px",width:"20px"}}/>
            <div className={classes.listItem}>Sheets</div>
          </ListItem>

          <ListItem className="list_item">
            <img src={slidesimage} style={{height:"20px",width:"20px"}}/>
            <div className={classes.listItem}>Slides</div>
          </ListItem>

          <ListItem className="list_item">
            <img src={formimage} style={{height:"20px",width:"20px"}}/>
            <div className={classes.listItem}>Forms</div>
          </ListItem>
        </List>
        <Divider/>
      </div>
    )
  return (
    <div className="app">
      <>
      <IconButton onClick={toggleDrawer('left',true)}>
              <MenuIcon/>
       </IconButton>
       <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={'left'}>
           {list("left")}
       </Drawer>
       </>
    </div>
  );
}

export default TemporaryDrawer;
