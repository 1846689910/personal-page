import React from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { TABS } from "../../constants";

type DesktopNavProps = {
  classes: {
    grid: string;
    btn: string;
    btnActive: string;
  }
};

export default function DesktopNav({ classes }: DesktopNavProps) {
  const router = useRouter();
  const handleClick = (tab: { path: string }, i: number) => {  // eslint-disable-line
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
