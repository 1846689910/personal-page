import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  makeStyles,
  CircularProgress,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "180px",
    width: "180px",
    background: theme.palette.panel.dark,
  },
  grid: {
    margin: "10px",
    position: "relative",
  },
  paperGrid: {
    height: "180px",
    position: "relative",
  },
  text: {
    position: "absolute",
    bottom: 0,
  },
  avatar: {
    position: "absolute",
    top: "60px",
    width: "60px",
    height: "60px",
  },
}));

export default function Skill({ name, value, src, avatarStyle }) {
  const classes = useStyles();
  return (
    <Grid item xs={2} className={classes.grid}>
      <Paper elevation={3} className={classes.paper}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.paperGrid}
        >
          <Grid item>
            <CircularProgress
              variant="static"
              value={value}
              size={110}
              thickness={4}
            />
          </Grid>
          <Avatar
            src={src}
            alt={name}
            className={classes.avatar}
            style={avatarStyle || {}}
          />
          <Typography className={classes.text}>{name}</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
Skill.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  src: PropTypes.string,
  avatarStyle: PropTypes.object,
};
