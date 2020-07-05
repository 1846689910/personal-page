import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  makeStyles,
  Container,
  IconButton,
  Link,
} from "@material-ui/core";
import Nav from "./Nav1";
import BackgroundCarousel from "./Home/BackgroundCarousel";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    width: "100vw",
  },
  container: {
    position: "relative",
    height: "100vh",
    overflow: "scroll",
  },
  bottomGrid: {
    position: "absolute",
    bottom: 0,
    left: "10vw",
    maxWidth: "200px"
  },
  bottomGridInner: {
    height: "40px",
    width: "40px",
    margin: "0 5px",
    background: theme.palette.panel.dark,
  },
  bottomIconBtn: {
    color: "black",
  },
}));

export default function PageWrapper({ children }) {
  const classes = useStyles();
  return (
    <Grid direction="row" container item className={classes.background}>
      <BackgroundCarousel />
      <Container maxWidth="lg" className={classes.container}>
        <Nav />
        {children}
      </Container>
      <BottomLinks {...{ classes }} />
    </Grid>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

function BottomLinks({ classes }) {
  return (
    <Grid container justify="flex-start" className={classes.bottomGrid}>
      {[
        { Icon: GitHubIcon, url: "https://github.com/1846689910" },
        { Icon: LinkedInIcon, url: "https://www.linkedin.com/in/zuhuihe/" },
        { Icon: EmailIcon, url: "mailto:eric14706@gmail.com" },
        // { Icon: FacebookIcon, url: "https://www.facebook.com/wiesler.he" },
      ].map(({ Icon, url }, i) => (
        <Grid
          key={i}
          className={classes.bottomGridInner}
          container
          justify="center"
          alignItems="center"
        >
          <IconButton size="small">
            <Link href={url}>
              <Icon className={classes.bottomIconBtn} />
            </Link>
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}
BottomLinks.propTypes = {
  classes: PropTypes.object,
};
