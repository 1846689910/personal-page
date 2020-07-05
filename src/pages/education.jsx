import React from "react";
import {
  Grid,
  Typography,
  makeStyles
} from "@material-ui/core";
import { IMAGE_PATH } from "../client/js/constants";
import EduItem from "../client/js/components/Education/EduItem";

const useStyles = makeStyles({
  title: {
    marginTop: "20px"
  }
});

const educations = [
  {
    imageSrc: IMAGE_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree:
      "M.S. in Computer Systems Networking and TelecommunicationsGrade,3.7",
    range: "May 2015 - Dec 2016",
  },
  {
    imageSrc: IMAGE_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree: "M.S. in Mechanical Engineering, 3.6",
    range: "Aug 2013 - May 2015",
  },
  {
    imageSrc: IMAGE_PATH.YANSHAN,
    imageAlt: "YanShan University",
    institute: "YanShan University",
    degree: "B.S. in Mechanical Engineering, 3.4",
    range: "Sep 2009 - May 2013",
  },
];

const certificates = [
  {
    imageSrc: IMAGE_PATH.SU,
    imageAlt: "Syracuse University",
    institute: "Syracuse University",
    degree:
      "Certificate of Advanced Study in Data Science",
    range: "May 2015 - Dec 2015",
  },
  {
    imageSrc: IMAGE_PATH.ORACLE,
    imageAlt: "Oracle",
    institute: "Oracle",
    degree: "Oracle Certified Associate, Java SE 8 Programmer",
    range: "Nov 2016",
  },
  {
    imageSrc: IMAGE_PATH.UDACITY,
    imageAlt: "Udacity",
    institute: "Udacity",
    degree: "Front-End Web Developer Nanodegree",
    range: "Jul 2016",
  },
];

export default function Education() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Typography variant="h5" className={classes.title}>DEGREES</Typography>
      {educations.map((x, i) => (
        <EduItem {...x} key={i} />
      ))}
      <Typography variant="h5" className={classes.title}>CERTIFICATES</Typography>
      {certificates.map((x, i) => (
        <EduItem {...x} key={i} />
      ))}
    </Grid>
  );
}
