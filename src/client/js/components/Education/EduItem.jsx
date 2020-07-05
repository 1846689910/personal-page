import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    width: "80px",
    height: "80px",
  },
  textOuter: {
    width: "70%",
    margin: "10px 40px",
  },
});

export default function EduItem({
  imageSrc,
  imageAlt,
  institute,
  degree,
  range,
}) {
  const classes = useStyles();
  return (
    <Grid container item justify="center">
      <Grid item className={classes.textOuter} xs={12} container>
        <Grid item xs={2} container justify="center">
          <Avatar
            variant="square"
            src={imageSrc}
            alt={imageAlt}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={10} container direction="column">
          <Typography variant="h6">{institute}</Typography>
          <Typography>{degree}</Typography>
          {range && <Typography>{range}</Typography>}
        </Grid>
      </Grid>
    </Grid>
  );
}
EduItem.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  institute: PropTypes.string,
  degree: PropTypes.string,
  range: PropTypes.string,
};
