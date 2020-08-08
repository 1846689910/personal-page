import React, { useContext, useState, useEffect, Fragment } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";
import GraphqlContext from "../GraphqlContext";

const useStyles = makeStyles(
  (theme: { palette: { panel: { dark: string } } }) => ({
    descOuter: (attr: { isTabletOrMobile: boolean }) => ({
      height: "40vh",
      background: theme.palette.panel.dark,
      width: attr.isTabletOrMobile ? "90%" : "70%",
      padding: attr.isTabletOrMobile ? "10px" : "40px",
      overflow: "auto",
    }),
    desc: {
      fontSize: "18px",
    },
  }),
);

export default function Summary() {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const { querySummary } = useContext(GraphqlContext);
  const classes = useStyles({ isTabletOrMobile });
  const [summary, setSummary] = useState([] as string[]);
  useEffect(() => {
    if (querySummary.data) setSummary(querySummary.data.summary);
    console.log(querySummary.data);
  }, [querySummary]);

  const SummaryItems = summary.map((s, i, arr) =>
    i === arr.length - 1 ? (
      <Typography variant="body1" className={classes.desc} key={i}>
        {s}
      </Typography>
    ) : (
      <Fragment key={i}>
        <Typography variant="body1" className={classes.desc}>
          {s}
        </Typography>
        <br />
      </Fragment>
    ),
  );

  return (
    <Grid container item justify="center">
      <Grid item className={classes.descOuter}>
        {SummaryItems.map((x) => x)}
      </Grid>
    </Grid>
  );
}
