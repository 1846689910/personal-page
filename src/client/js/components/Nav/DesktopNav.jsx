import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  Grid,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { TABS } from "../../constants";

export default function DesktopNav({ classes }) {
  const router = useRouter();
  const handleClick = (tab, i) => {  // eslint-disable-line
    router.push(tab.path);
  };
  return (
    <Grid container justify="space-evenly" className={classes.grid}>
      {TABS.map((tab, i) => (
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
DesktopNav.propTypes = {
  classes: PropTypes.object
};