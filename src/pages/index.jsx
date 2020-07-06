import React from "react";
import PropTypes from "prop-types";
import Promise from "bluebird";
import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatarOuter: {
    height: "30vh",
  },
  avatar: {
    height: "150px",
    width: "150px",
  },
  name: {
    color: "white",
  },
  descOuter: {
    height: "40vh",
    background: theme.palette.panel.dark,
    width: "70%",
    padding: "40px",
    overflow: "auto"
  },
  desc: {
    fontSize: "18px",
  },
}));

export default function Index(props) {
  const { shows } = props;
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        className={classes.avatarOuter}
      >
        <Grid item>
          <Avatar
            alt="Eric"
            src="/images/avatar.jpg"
            className={classes.avatar}
          />
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Typography className={classes.name} variant="h3">
          Zuhui(Eric) He
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography className={classes.name} variant="h4">
          Software Engineer @ Apple Inc.
        </Typography>
      </Grid>
      <Grid container item justify="center">
        <Grid item className={classes.descOuter}>
          <Typography variant="body1" className={classes.desc}>
            My expertise lies in Full Stack Development and Data Engineering. I
            have gained strong knowledge and experience in web development
            through daily work and hands-on projects, with proficiency in
            JavaScript and various web development frames and libraries and data
            engineering skills in Apache Spark with Scala, Java. I have years
            work experience and work as a Software Engineer right now. I am
            fluent in Chinese and English.
          </Typography>
          <br />
          <Typography variant="body1" className={classes.desc}>
            I have strong web development skills along with an excellent ability
            to meet/exceed goals across multiple projects. I maintain a
            dedicated, highly focused approach to project completion, and have a
            track record of contributing to development of components that are
            integrated to create functional, visually appealing web
            applications.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
Index.propTypes = {
  shows: PropTypes.array,
};

/**
 * @description dev server end-point for path `/`, please check https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * @param {Object} context { env }
 */
export async function getStaticProps(context) {
  console.log(context);
  const data = await Promise.resolve([{ show: 1 }, { show: 2 }, { show: 3 }]);
  console.log(`Show data fetched on server side. Count: ${data.length}`);
  return {
    props: {
      // will be passed to the page component as props
      shows: data.map((entry) => entry.show),
    },
  };
}
// Index.getInitialProps is deprecated
