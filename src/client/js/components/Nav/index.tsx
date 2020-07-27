import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import MediaQueryContext from "../MediaQueryContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

type ThemeType = {
  palette: {
    panel: {
      main: string;
      dark: string;
    },
    primary: {
      main: string;
    }
  }
};

const useStyles = makeStyles((theme: ThemeType) => ({
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
    border: "2px solid rgba(0,0,0,0.5)",
    padding: "5px",
  },
  menu: {
    margin: "55px 0 0 0px",
  },
  menuItem: {
    width: "200px",
  },
}));

export default function Nav(): React.ReactElement {
  const classes = useStyles();
  const { isMobile, isTablet } = useContext(MediaQueryContext);
  return isMobile || isTablet ? (
    <MobileNav classes={classes} />
  ) : (
    <DesktopNav classes={classes} />
  );
}
