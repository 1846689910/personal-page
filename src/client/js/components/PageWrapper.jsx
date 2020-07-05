import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Container } from "@material-ui/core";
import Nav from "./Nav1";
import BackgroundCarousel from "./Home/BackgroundCarousel";

const useStyles = makeStyles({
  background: {
    height: "100vh",
    width: "100vw",
  },
});

export default function PageWrapper({ children }) {
  const classes = useStyles();
  return (
    <Grid direction="row" container item className={classes.background}>
      <BackgroundCarousel />
      <Container maxWidth="lg">
        <Nav />
        {children}
      </Container>
    </Grid>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
