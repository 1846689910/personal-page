import React, { useContext } from "react";
import { Grid, Avatar, makeStyles } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";

const useStyles = makeStyles({
  avatarOuter: (attr) => ({
    height: attr.isTabletOrMobile ? "20vh" : "30vh",
  }),
  avatar: (attr) => ({
    height: attr.isTabletOrMobile ? "100px" : "150px",
    width: attr.isTabletOrMobile ? "100px" : "150px",
  }),
});

export default function AvatarImage() {
  const { isTabletOrMobile } = useContext(MediaQueryContext);
  const classes = useStyles({ isTabletOrMobile });
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      className={classes.avatarOuter}
    >
      <Grid item>
        <Avatar
          alt="Eric"
          src="/images/avatar.jpg"
          className={classes.avatar}
        />
      </Grid>
    </Grid>
  );
}
