import React, { useContext } from "react";
import { Grid, Typography, Avatar, makeStyles } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  itemGrid: {
    margin: "5px 0",
  },
  itemArrow: (attr: { isTabletOrMobile: boolean }) => ({
    width: attr.isTabletOrMobile ? "10%" : "3%",
  }),
  itemText: (attr: { isTabletOrMobile: boolean }) => ({
    width: attr.isTabletOrMobile ? "85%" : "95%",
  }),
  range: (attr: { isTabletOrMobile: boolean }) => ({
    textAlign: attr.isTabletOrMobile ? "center" : "unset",
  }),
});

export default function ExpItem({ summary, details }: { summary?: string, details: React.ReactChild[] }) {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid item xs={12} container direction="column">
      <Grid>
        {summary && (
          <Typography variant={isTabletOrMobile ? "inherit" : "body1"}>
            {summary}
          </Typography>
        )}
      </Grid>
      <Grid>
        {details.map((x: React.ReactChild, i: number) => (
          <Grid
            key={i}
            container
            alignItems="center"
            className={classes.itemGrid}
          >
            <Grid item className={classes.itemArrow}>
              <ArrowRightIcon />
            </Grid>
            <Grid item className={classes.itemText}>
              {x}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export function ExpTitle({ avatarSrc, title, range }: { avatarSrc: string, title: string, range: string }) {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  return (
    <Grid container justify="space-between" direction="row">
      {isTabletOrMobile ? (
        <Grid container item direction="column">
          <Grid container justify="center">
            {avatarSrc && (
              <Avatar variant="square" src={avatarSrc} alt={title} />
            )}
          </Grid>
          <Typography variant={isTabletOrMobile ? "body1" : "h6"}>
            {title}
          </Typography>
        </Grid>
      ) : (
        <Grid container item xs={9} justify="flex-start" alignItems="center">
          {avatarSrc && <Avatar variant="square" src={avatarSrc} alt={title} />}
          <Typography variant="h6">{title}</Typography>
        </Grid>
      )}
      <Grid
        item
        {...(isTabletOrMobile
          ? {
              container: true,
              justify: "center",
            }
          : {})}
      >
        <Typography variant={isTabletOrMobile ? "inherit" : "h6"}>
          {range}
        </Typography>
      </Grid>
    </Grid>
  );
}
