import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    height: "40px",
    position: "relative",
  },
  progress: {
    height: "15px",
  },
});

export default function Skill({ name, value }) {
  const classes = useStyles();
  const [usedValue, setUsedValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setUsedValue((prev) => (prev >= value ? value : prev + 5));
    }, 100);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <Grid container direction="row" item xs={12} className={classes.grid}>
      <Grid item xs={2} container alignItems="center">
        <Typography>
          <strong>{name}</strong>
        </Typography>
      </Grid>
      <Grid item xs={10} container alignItems="center">
        <Grid item xs={12}>
          <LinearProgress
            variant="determinate"
            value={usedValue}
            className={classes.progress}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
Skill.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};
