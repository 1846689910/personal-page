import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  grid: {
    height: "40px",
    position: "relative",
  },
  progress: {
    height: "15px",
  },
});

export default function Skill({ name, value }: { name: string, value: number }) {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  const [usedValue, setUsedValue] = useState<number>(0);
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
      <Grid item xs={isTabletOrMobile ? 12 : 2} container alignItems="center">
        <Typography>
          <strong>{name}</strong>
        </Typography>
      </Grid>
      <Grid item xs={isTabletOrMobile ? 12 : 10} container alignItems="center">
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
