// import React from "react";
// import { Box, Flex, Text, Link, Center } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
// import 


import React, { useState, useEffect } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '../images/instagram-icon.svg'
import FacebookIcon from '../images/facebook-icon.svg'
import LinkedInIcon from '../images/linkedin-icon.svg'
import { menu2 } from "./utils";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000",
    textAlign: "left",
    padding: "80px 0 30px",
    [theme.breakpoints.down("md")]: {
      padding: "60px 50px"
    },
  },
  content: {
    color: "#FFFFFF",
    fontSize: "1.5em",
    fontWeight: "600",
    padding: "5px 5px 5px 0",
  },
  contentPara: {
    color: "#FFFFFF",
    fontSize: "1.15rem",
    paddingTop: "10px",
  },
  visitors: {
    color: "#FFFFFF",
    fontSize: "1.5em",
    padding: "5px 5px 5px 0",
    display: "flex",
    alignItems: "center"
  },
  head: {
    color: "#FFFFFF",
    fontSize: "2.5em",
    fontWeight: 400,
    marginBottom: "0",
  },
  button: {
    borderRadius: 0,
    width: "90%",
    textTransform: "none",
    background: "#000000",
    fontSize: "18px",
    marginLeft: "10px",
    marginRight: "10px",
    margin: theme.spacing(1),
    boxShadow: "none",
    border: "3px solid #FFFFFF",
  },
  item_head: {
    color: "#FFFFFF",
    fontSize: "1.5em",
    letterSpacing: "2px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      marginTop: "35px",
    },
  },
  item_head_follow: {
    display: "inline-block",
    color: "#FFFFFF",
    fontSize: "1.2em",
    letterSpacing: "2px",
    margin: "auto 10px auto 0"
    // marginRight: "10px",
  },
  item_content: {
    color: "#FFFFFF",
    fontSize: "0.5em",
  },
  list_item0: {
    padding: 0,
    marginBottom: '8px',
    "&:hover": {
      color: "#3F67F6",
    },
  },
  list_item01: {
    padding: 0,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  list_item02: {
    padding: 0,
    marginBottom: '8px',
    "&:hover": {
      // color: "#3F67F6",
    },
  },
  list_item: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  divider: {
    border: "1px solid #FFF",
    width: "90%",
    margin: "3rem auto 2rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  socialLink: {
    "&:hover": {
      textDecoration: "none"
    },
  },
  socialContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
      // textAlign: "center",
    },
  },
  socialIcon: {
    width: "35px",
    height: "35px",
    margin: "0 5px",
  },
  copyright: {
    fontSize: "1.1rem",
    color: "#FFFFFF",
    display: "inline-block",
    width: "100%",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      textAlign: "center",
    },
  },
  copyrightBrand: {
    color: "#3F67F6",
  },
}));

const FootDialog = ({ open, handleClose, title, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      aria-labelledby="foot-dialog-title"
      aria-describedby="foot-dialog-description"
    >
      <DialogTitle id="foot-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Block = (number, index) => {
  return (
    <div key={index} style={{display: "inline-flex", justifyContent: "center", alignItems: "center", padding: '5px', background: '#FFF', color: "#000", margin: "3px", width: "30px", height: "30px", fontSize: "20px", textAlign: "center"}}>
      {number}
    </div>
  );
}

const VisitCount = ({ visitors }) => {
  const v = String(visitors).split('');
  return (
    <div style={{display: "inline-block"}}>
      {v.map((x, index) => {
        return ( Block(x, index) )
      })}
    </div>
  )
}

const Footer = () => {
  let history = useHistory();
  const classes = useStyles();
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [tc, setTc] = useState<boolean>(false);
  const privacyOpen = () => setPrivacy(true);
  const privacyClose = () => setPrivacy(false);
  const tcOpen = () => setTc(true);
  const tcClose = () => setTc(false);
  
  const [visitors, setVisitors] = useState(0);

  const getVisitors = async () => {
    // CountAPI stopped working. Find a new solution
    // const { data } = await axios('https://api.countapi.xyz/update/skinzy.in/dermalens/?amount=1');
    const data = { value: '0' };
    if(data != null || data.value != '0') {
      setVisitors(parseInt(data.value));
    }
  }

  useEffect(() => {
    getVisitors();
  }, []);


  return (
    <div className={classes.root}>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item sm={12} xs={12} md={4} style={{display: 'flex', justifyContent: "space-between", flexDirection: "column"}}>
          <div>
          <Typography className={classes.head} variant="h2" gutterBottom>
            <b style={{ fontWeight: 800 }}>DERMA</b>LENS
          </Typography>
          <Typography component={'div'} className={classes.content} variant="h5" gutterBottom>
            <div>
             <i> By AiM4u Software Solutions </i>
            </div>
          </Typography>
          <Typography component={'p'} className={classes.contentPara} gutterBottom>
            An AI powered Skincare Assistant to check your skin issues and connect with the dermatologists anytime, anywhere.
          </Typography>
          </div>
          <div>
          { visitors != 0 &&
          <Typography className={classes.visitors} variant="h5" gutterBottom>
            <div>
              <span style={{marginRight: "10px"}}> Total Visitors </span>
              <VisitCount visitors={visitors} /> 
            </div>
          </Typography>
          }
          </div>
        </Grid>
        <Grid item sm={12} xs={12} md={1}>
          <Typography className={classes.item_head} variant="h6" gutterBottom>
            Explore
          </Typography>
          <Typography component={'div'} className={classes.item_content}>
            <List disablePadding>
              {menu2.map((m, i) => (
                <ListItem
                  key={i}
                  button
                  onClick={() => history.push(m.link)}
                  disableGutters={true}
                  classes={{ root: classes.list_item0 }}
                >
                  <ListItemText primary={m.text} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={2}>
          <Typography className={classes.item_head} variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography component={'div'} className={classes.item_content}>
            <List disablePadding>
              <ListItem
                component="span"
                classes={{ root: classes.list_item02 }}
                disableGutters={true}
              >
                <ListItemText primary="AiM4u Software Solutions Private Limited, 8th Floor, SP-TBI,Munshi Nagar, Andheri (W)" />
              </ListItem>
              <ListItem
                component="span"
                classes={{ root: classes.list_item02 }}
                disableGutters={true}
              >
                <ListItemText primary="Mumbai, Maharashtra 400058" />
              </ListItem>
              <ListItem
                component="span"
                classes={{ root: classes.list_item02 }}
                disableGutters={true}
              >
                <ListItemText primary="+91 8657424574" />
              </ListItem>
              <ListItem
                component="a"
                href="mailto:support@aim4u.co.in"
                button
                disableGutters={true}
                classes={{ root: classes.list_item01 }}
              >
                <ListItemText primary="support@aim4u.co.in" />
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={1}>
          <Typography className={classes.item_head} variant="h6" gutterBottom>
            Legal
          </Typography>
          <Typography component={'div'} className={classes.item_content}>
            <List>
              <ListItem
                component={Link}
                to="/privacy-policy"
                button
                classes={{ root: classes.list_item0 }}
              >
                <ListItemText primary="Terms & Conditions" />
              </ListItem>
              <ListItem
                component={Link}
                to="/privacy-policy"
                button
                classes={{ root: classes.list_item0 }}
              >
                <ListItemText primary="Privacy Policy" />
              </ListItem>
            </List>
          </Typography>
        </Grid>
      </Grid>

      <hr className={classes.divider} />

      <Grid container justifyContent={"space-evenly"} alignItems="center">
        <Grid item sm={12} xs={12} md={5} className={classes.socialContainer}>
          <Typography
            component={'span'}
            className={classes.item_head_follow}
            gutterBottom
          >
            Follow Us
          </Typography>
          <a href="https://www.instagram.com/dermalens_by_aim4u/" target="_blank" rel="noreferrer" className={classes.socialLink}> <img className={classes.socialIcon} src={InstagramIcon} alt="Instagram" /> </a>
          <a href=" https://www.facebook.com/aim4usoftwaresolutions/" target="_blank" rel="noreferrer" className={classes.socialLink}> <img className={classes.socialIcon} src={FacebookIcon} alt="Facebook" /> </a>
          <a href="https://www.linkedin.com/company/aim4u-software-solutions-private-limited/" target="_blank" rel="noreferrer" className={classes.socialLink}> <img className={classes.socialIcon} src={LinkedInIcon} alt="LinkedIn" /> </a>
        </Grid>
         <Grid item sm={12} xs={12} md={5}>
            <span className={classes.copyright}>
              Copyright &copy; All Rights Reserved 2023 by <span className={classes.copyrightBrand}> AiM4u Software Solutions </span>
            </span>
         </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
