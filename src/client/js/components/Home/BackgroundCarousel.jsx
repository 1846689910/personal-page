import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Path from "path";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  grid: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    zIndex: -99,
  },
});

const imagePaths = [
  "intro.jpg",
  "education.jpg",
  "skills.jpg",
  "work-experiences.jpg",
  "contact-me.jpg",
].map((_) => `/images/${_}`);

export default function BackgroundCarousel() {
  const carouselIndex = useSelector((state) => state.carouselIndex.value);
  console.log(carouselIndex);
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <Carousel pause={false} controls={false} indicators={false}>
        {imagePaths.map((path, i) => (
          <Carousel.Item key={i}>
            <img src={path} alt={Path.basename(path)} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Grid>
  );
}
