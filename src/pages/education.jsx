import React, { useContext } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { INSTITUTE_ICON_PATH } from "../client/js/constants";
import EduItem from "../client/js/components/Education/EduItem";
import MediaQueryContext from "../client/js/components/MediaQueryContext";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
  },
  grid: {
    background: theme.palette.panel.dark,
    height: "35vh",
    overflow: "auto",
  },
}));

const educations = [
  {
    imageSrc: INSTITUTE_ICON_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree:
      "M.S. in Computer Systems Networking and TelecommunicationsGrade,3.7",
    range: "May 2015 - Dec 2016",
  },
  {
    imageSrc: INSTITUTE_ICON_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree: "M.S. in Mechanical Engineering, 3.6",
    range: "Aug 2013 - May 2015",
  },
  {
    imageSrc: INSTITUTE_ICON_PATH.YANSHAN,
    imageAlt: "YanShan University",
    institute: "YanShan University",
    degree: "B.S. in Mechanical Engineering, 3.4",
    range: "Sep 2009 - May 2013",
  },
];

const certificates = [
  {
    imageSrc: INSTITUTE_ICON_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree: "Certificate of Advanced Study in Data Science",
    range: "May 2015 - Dec 2015",
  },
  {
    imageSrc: INSTITUTE_ICON_PATH.ORACLE,
    imageAlt: "Oracle",
    institute: "Oracle",
    degree: "Oracle Certified Associate, Java SE 8 Programmer",
    range: "Nov 2016",
  },
  {
    imageSrc: INSTITUTE_ICON_PATH.UDACITY,
    imageAlt: "Udacity",
    institute: "Udacity",
    degree: "Front-End Web Developer Nanodegree",
    range: "Jul 2016",
  },
];

export default function Education() {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid container direction="column">
      <Typography
        variant={isTabletOrMobile ? "body1" : "h5"}
        className={classes.title}
      >
        DEGREES
      </Typography>
      <Grid className={classes.grid}>
        {educations.map((x, i) => (
          <EduItem {...x} key={i} />
        ))}
      </Grid>
      <Typography
        variant={isTabletOrMobile ? "body1" : "h5"}
        className={classes.title}
      >
        CERTIFICATES
      </Typography>
      <Grid className={classes.grid}>
        {certificates.map((x, i) => (
          <EduItem {...x} key={i} />
        ))}
      </Grid>
    </Grid>
  );
}
