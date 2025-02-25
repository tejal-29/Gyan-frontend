import React, { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000",
    textAlign: "center",
    padding: "100px 10px",
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

const Footer = () => {
  const classes = useStyles();
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [tc, setTc] = useState<boolean>(false);
  const privacyOpen = () => setPrivacy(true);
  const privacyClose = () => setPrivacy(false);
  const tcOpen = () => setTc(true);
  const tcClose = () => setTc(false);
  return (
    <div className={classes.root}>
      {/* <FootDialog open={tc} handleClose={tcClose} title="Terms and Conditions">
        
      </FootDialog>
      <FootDialog
        open={privacy}
        handleClose={privacyClose}
        title="Terms and Conditions"
      >
     
      </FootDialog> */}

      
      <IconButton href="https://instagram.com/dermalens" size="small">
        <InstagramIcon fontSize="large" style={{ color: "#FFFF" }} />
      </IconButton>
      <IconButton href="https://www.facebook.com/aim4usoftwaresolutions/" size="small">
        <FacebookIcon fontSize="large" style={{ color: "#FFFF" }} />
      </IconButton>
      <IconButton
        href="https://in.linkedin.com/organization-guest/company/aim4u-software-solutions-pvt-ltd"
        size="small">
        <LinkedInIcon fontSize="large" style={{ color: "#FFFF" }} />
      </IconButton>
      <div>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={3}>
            <Link to='/policy'>
              <Button className={classes.button} >
                <Typography style={{ color: "#fff" }}>
                  Terms & Conditions
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <NavLink to='/policy'>
              <Button className={classes.button}>
                <Typography style={{ color: "#fff" }}>Privacy Policy</Typography>
              </Button>
            </NavLink>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Footer;
