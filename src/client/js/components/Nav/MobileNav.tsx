import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  Grid,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { TABS } from "../../constants";
import MenuIcon from "@material-ui/icons/Menu";

type MobileNavProps = {
  classes: {
    grid: string;
    menuIcon: string;
    menu: string;
    menuItem: string;
  }
};

export default function MobileNav({ classes }: MobileNavProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuClick = (event: { currentTarget: any; }) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick = (tab: { path: string }, i) => {  // eslint-disable-line
    setAnchorEl(null);
    router.push(tab.path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container justify="flex-start" className={classes.grid}>
      <IconButton onClick={menuClick}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {TABS.map((tab, i) => (
          <MenuItem
            key={i}
            onClick={() => handleClick(tab, i)}
            className={classes.menuItem}
          >
            {tab.label}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
}
