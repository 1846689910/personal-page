import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  Grid,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setCarouselIndexAction } from "../../settings/actions";
import { TABS } from "../../constants";
import MenuIcon from "@material-ui/icons/Menu";

export default function MobileNav({ classes }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const menuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick = (tab, i) => {
    dispatch(setCarouselIndexAction(i));
    setAnchorEl(null);
    router.push(tab.path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container justify="flex-start" className={classes.grid}>
      <IconButton onClick={menuClick} size="small">
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
MobileNav.propTypes = {
  classes: PropTypes.object,
};
