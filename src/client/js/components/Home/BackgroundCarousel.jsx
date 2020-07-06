import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { TABS } from "../../constants";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles({
  grid: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    zIndex: -99,
  },
});

export default function BackgroundCarousel() {
  const router = useRouter();
  const carouselIndex = TABS.findIndex(tab => tab.path === router.pathname); // useSelector((state) => state.carouselIndex.value);
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
        {TABS.map(({bgPath}, i) => (
          <Carousel.Item key={i}>
            <div
              style={{
                background: `url(${bgPath}) no-repeat`,
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
