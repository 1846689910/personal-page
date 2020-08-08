import React, { Fragment, useContext, useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";
import GraphqlContext from "../GraphqlContext";

const useStyles = makeStyles({
  name: {
    color: "white",
  },
});

export default function NameTitle() {
  const classes = useStyles();
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const { queryName, queryTitle } = useContext(GraphqlContext);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (queryName.data) setName(queryName.data.name);
    if (queryTitle.data) setTitle(queryTitle.data.title);
  }, [queryName, queryTitle]);
  return (
    <Fragment>
      <Grid item container justify="center">
        <Typography
          className={classes.name}
          variant={isTabletOrMobile ? "h5" : "h3"}
        >
          { name }
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography
          className={classes.name}
          variant={isTabletOrMobile ? "body1" : "h4"}
        >
          { title }
        </Typography>
      </Grid>
    </Fragment>
  );
}
