import React, { Fragment, useContext } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  name: {
    color: "white",
  },
});

export default function NameTitle() {
  const classes = useStyles();
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  return (
    <Fragment>
      <Grid item container justify="center">
        <Typography
          className={classes.name}
          variant={isTabletOrMobile ? "h5" : "h3"}
        >
          Zuhui(Eric) He
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography
          className={classes.name}
          variant={isTabletOrMobile ? "body1" : "h4"}
        >
          Software Engineer @ Apple Inc.
        </Typography>
      </Grid>
    </Fragment>
  );
}
