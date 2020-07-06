import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography, Avatar } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  avatar: {
    width: "80px",
    height: "80px",
  },
  textOuter: (attr) => ({
    width: attr.isTabletOrMobile ? "100%" : "70%",
    margin: attr.isTabletOrMobile ? "10px 0px" : "10px 40px",
  }),
  institute: (attr) => ({
    textAlign: attr.isTabletOrMobile ? "center" : "unset",
    fontWeight: attr.isTabletOrMobile ? "bold" : "unset",
  }),
  range: (attr) => ({
    textAlign: attr.isTabletOrMobile ? "center" : "unset",
  }),
  degree: (attr) => ({
    textAlign: attr.isTabletOrMobile ? "center" : "unset",
  }),
});

export default function EduItem({
  imageSrc,
  imageAlt,
  institute,
  degree,
  range,
}) {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid container item justify="center">
      <Grid item className={classes.textOuter} xs={12} container>
        <Grid item xs={isTabletOrMobile ? 12 : 2} container justify="center">
          <Avatar
            variant="square"
            src={imageSrc}
            alt={imageAlt}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={isTabletOrMobile ? 12 : 10} container direction="column">
          <Typography
            className={classes.institute}
            variant={isTabletOrMobile ? "body1" : "h6"}
          >
            {institute}
          </Typography>
          <Typography className={classes.degree} variant={isTabletOrMobile ? "body1" : "inherit"}>
            {degree}
          </Typography>
          {range && <Typography className={classes.range}>{range}</Typography>}
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
