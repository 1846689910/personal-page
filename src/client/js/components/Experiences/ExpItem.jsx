import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Avatar, makeStyles } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  itemGrid: {
    margin: "5px 0",
  },
  itemArrow: {
    width: "3%",
  },
  itemText: {
    width: "95%",
  },
});

export default function ExpItem({ summary, details }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} container direction="column">
      <Grid>
        <Typography variant="body1">{summary}</Typography>
      </Grid>
      <Grid>
        {details.map((x, i) => (
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
ExpItem.propTypes = {
  summary: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string),
};

export function ExpTitle({ avatarSrc, title, range }) {
  return (
    <Grid container justify="space-between" direction="row">
      <Grid container item xs={9} justify="flex-start" alignItems="center">
        {avatarSrc && <Avatar variant="square" src={avatarSrc} alt={title} />}
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{range}</Typography>
      </Grid>
    </Grid>
  );
}
ExpTitle.propTypes = {
  avatarSrc: PropTypes.string,
  title: PropTypes.string,
  range: PropTypes.string,
};
