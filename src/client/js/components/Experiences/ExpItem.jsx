import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Avatar, makeStyles } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  itemGrid: {
    margin: "5px 0",
  },
  itemArrow: attr => ({
    width: attr.isTabletOrMobile ? "3%" : "10%",
  }),
  itemText: attr => ({
    width: attr.isTabletOrMobile ? "85%" : "95%",
  }),
  range: (attr) => ({
    textAlign: attr.isTabletOrMobile ? "center" : "unset",
  }),
});

export default function ExpItem({ summary, details }) {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid item xs={12} container direction="column">
      <Grid>
        <Typography variant={isTabletOrMobile ? "" : "body1"}>{summary}</Typography>
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
        {...{
          container: isTabletOrMobile,
          justify: isTabletOrMobile ? "center" : "",
        }}
      >
        <Typography variant={isTabletOrMobile ? "" : "h6"}>{range}</Typography>
      </Grid>
    </Grid>
  );
}
ExpTitle.propTypes = {
  avatarSrc: PropTypes.string,
  title: PropTypes.string,
  range: PropTypes.string,
};
