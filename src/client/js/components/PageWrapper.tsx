import React from "react";
import {
  Grid,
  makeStyles,
  Container,
  IconButton,
  Link,
  Tooltip,
} from "@material-ui/core";
import Nav from "./Nav";
import BackgroundCarousel from "./BackgroundCarousel";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import { LINKS } from "../constants";
import DescriptionIcon from "@material-ui/icons/Description";
// import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme: { palette: { panel: { dark: string } } }) => ({
  background: {
    height: "100vh",
    width: "100vw",
  },
  container: {
    position: "relative",
    height: "100vh",
    overflow: "auto",
  },
  bottomGrid: {
    position: "absolute",
    bottom: 0,
    left: "10vw",
    maxWidth: "200px",
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

export default function PageWrapper({ children }: { children: React.ReactNode }) {
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

type BottomLinksProps = {
  classes: {
    bottomGrid: string;
    bottomGridInner: string;
    bottomIconBtn: string;
  }
};

function BottomLinks({ classes }: BottomLinksProps) {
  return (
    <Grid container justify="flex-start" className={classes.bottomGrid}>
      {[
        { Icon: GitHubIcon, url: LINKS.GITHUB },
        { Icon: LinkedInIcon, url: LINKS.LINKEDIN },
        { Icon: EmailIcon, url: LINKS.EMAIL },
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
      <Grid
        className={classes.bottomGridInner}
        container
        justify="center"
        alignItems="center"
      >
        <Tooltip title="download resume" placement="top">
          <IconButton size="small">
            <a
              href={LINKS.RESUME}
              target="_blank"
              download="ZUHUIHE.RESUME.pdf"
            >
              <DescriptionIcon className={classes.bottomIconBtn} />
            </a>
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
