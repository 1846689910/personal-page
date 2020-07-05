import React from "react";
import { useRouter } from "next/router";
import { Grid, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setCarouselIndexAction } from "../../settings/actions";

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
    fontWeight: "bold"
  },
  btnActive: {
    background: theme.palette.panel.dark,
    color: theme.palette.primary.main,
  },
}));

const tabs = [
  { path: "/", label: "intro" },
  { path: "/education", label: "education" },
  { path: "/skills", label: "skills" },
  { path: "/experiences", label: "experiences" },
  { path: "/contact", label: "contact" },
];

export default function Nav() {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (tab, i) => {
    router.push(tab.path);
    dispatch(setCarouselIndexAction(i));
  };
  return (
    <Grid container justify="space-evenly" className={classes.grid}>
      {tabs.map((tab, i) => (
        <Button
          key={i}
          variant="contained"
          className={clsx(
            classes.btn,
            router.pathname === tab.path ? classes.btnActive : "",
          )}
          onClick={() => handleClick(tab, i)}
        >
          {tab.label}
        </Button>
      ))}
    </Grid>
  );
}
