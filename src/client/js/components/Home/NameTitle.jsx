import React, { Fragment } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  name: {
    color: "white",
  },
});

export default function NameTitle() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container justify="center">
        <Typography className={classes.name} variant="h3">
          Zuhui(Eric) He
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography className={classes.name} variant="h4">
          Software Engineer @ Apple Inc.
        </Typography>
      </Grid>
    </Fragment>
  );
}
