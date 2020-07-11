import React, { useContext } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles((theme) => ({
  descOuter: attr => ({
    height: "40vh",
    background: theme.palette.panel.dark,
    width: attr.isTabletOrMobile ? "90%" : "70%",
    padding: attr.isTabletOrMobile ? "10px" : "40px",
    overflow: "auto",
  }),
  desc: {
    fontSize: "18px",
  },
}));

export default function Summary() {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid container item justify="center">
      <Grid item className={classes.descOuter}>
        <Typography variant="body1" className={classes.desc}>
          My expertise lies in Full Stack Development and Data Engineering. I
          have 3+ years of experience in web development through
          daily work and hands-on projects, with proficiency in JavaScript and
          various web development frameworks and libraries and data engineering
          skills in Apache Spark with Scala, Java. I am fluent in Chinese and
          English.
        </Typography>
        <br />
        <Typography variant="body1" className={classes.desc}>
          I have strong web development skills along with an excellent ability
          to meet/exceed goals across multiple projects. I maintain a dedicated,
          highly focused approach to project completion, and have a track record
          of contributing to development of components that are integrated to
          create functional, visually appealing web applications.
        </Typography>
      </Grid>
    </Grid>
  );
}
