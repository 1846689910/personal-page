import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "20px 0",
  },
  btn: {
    background: theme.palette.panel.main,
    "&:hover": {
      background: theme.palette.panel.dark,
      color: theme.palette.primary.main,
    },
    width: "150px",
    height: "60px",
    fontWeight: "bold",
  },
  btnActive: {
    background: theme.palette.panel.dark,
    color: theme.palette.primary.main,
  },
  menuIcon: {
    fontSize: "50px",
    border: "1px solid black",
    padding: "5px",
  },
  menu: {
    margin: "55px 0 0 0px",
  },
  menuItem: {
    width: "200px",
  },
}));

export default function Nav() {
  const classes = useStyles();
  const { isMobile, isTablet } = useContext(MediaQueryContext);
  return isMobile || isTablet ? (
    <MobileNav classes={classes} />
  ) : (
    <DesktopNav classes={classes} />
  );
}
