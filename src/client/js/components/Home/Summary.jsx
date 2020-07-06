import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descOuter: {
    height: "40vh",
    background: theme.palette.panel.dark,
    width: "70%",
    padding: "40px",
    overflow: "auto",
  },
  desc: {
    fontSize: "18px",
  },
}));

export default function Summary() {
  const classes = useStyles();
  return (
    <Grid container item justify="center">
      <Grid item className={classes.descOuter}>
        <Typography variant="body1" className={classes.desc}>
          My expertise lies in Full Stack Development and Data Engineering. I
          have gained strong knowledge and experience in web development through
          daily work and hands-on projects, with proficiency in JavaScript and
          various web development frames and libraries and data engineering
          skills in Apache Spark with Scala, Java. I have years work experience
          and work as a Software Engineer right now. I am fluent in Chinese and
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
