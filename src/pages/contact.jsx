import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  IconButton,
  Link,
  Popover,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { LINKS, IMAGE_PATH } from "../client/js/constants";

const useStyles = makeStyles((theme) => ({
  outer: {
    height: "80vh",
  },
  inner: {
    height: "40vh",
    background: theme.palette.panel.dark,
  },
  iconBtn: {
    color: "black",
    width: "40px",
    height: "40px",
  },
  popover: {
    marginTop: "65px",
  },
  qr: {
    width: "140px",
    height: "140px",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      item
      xs={12}
      className={classes.outer}
      justify="center"
      alignItems="center"
    >
      <Grid container item xs={6} className={classes.inner} justify="center">
        {[
          { Icon: GitHubIcon, url: LINKS.GITHUB },
          { Icon: LinkedInIcon, url: LINKS.LINKEDIN },
          { Icon: EmailIcon, url: LINKS.EMAIL },
        ].map(({ Icon, url }, i) => (
          <Grid
            key={i}
            container
            item
            xs={3}
            justify="center"
            alignItems="center"
          >
            <IconButton size="small">
              <Link href={url}>
                <Icon className={classes.iconBtn} />
              </Link>
            </IconButton>
          </Grid>
        ))}

        <Grid container item xs={3} justify="center" alignItems="center">
          <IconButton size="small" onClick={handlePopoverOpen}>
            <Avatar src={IMAGE_PATH.WECHAT} className={classes.iconBtn} />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            className={classes.popover}
          >
            <Avatar
              variant="square"
              src={IMAGE_PATH.WECHAT_QR}
              className={classes.qr}
            />
          </Popover>
        </Grid>
      </Grid>
    </Grid>
  );
}
