import React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const classes = useStyles();
  const settings = {
    activeIndex: carouselIndex,
    pause: false,
    controls: false,
    indicators: false,
  };
  return (
    <Grid className={classes.grid}>
      <Carousel {...settings}>
        {imagePaths.map((path, i) => (
          <Carousel.Item key={i}>
            <div
              style={{
                background: `url(${path}) no-repeat`,
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Grid>
  );
}
