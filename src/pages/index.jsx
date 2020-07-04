import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../client/styles/App.scss";
import "../client/styles/App.css";
import "../client/styles/App.less";
import "../client/styles/App.styl";
import { Container, Grid, Typography, Link, Avatar } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Nav from "../client/js/components/Nav";
import DemoWrapper from "../client/js/components/DemoWrapper";
import ModuledStyleDemo from "../client/js/components/Home/ModuledStyleDemo";
import DynamicImportDemo from "../client/js/components/Home/dynamic-import-demo";
import ApolloGraphqlDemo from "../client/js/components/Home/apollo-graphql-demo";
import Promise from "bluebird";

export default function Index(props) {
  const { shows } = props;
  console.log(shows);
  return (
    <Fragment>
      {/* <Nav /> */}
      {/* <Container> */}
      <Grid
        direction="row"
        container
        item
        alignItems="center"
        justify="center"
        style={{ height: "100vh", width: "100vw", background: grey[300] }}
      >
        <Grid>
          <Grid container item justify="center">
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              style={{ width: "80px", height: "80px" }}
            />
          </Grid>
          <Grid>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Personal Page is in Actively Build
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Please visit my{" "}
              <Link href="https://www.linkedin.com/in/zuhuihe/">
                <strong>LinkedIn</strong>
              </Link>{" "}
              page instead for now
            </Typography>
          </Grid>
        </Grid>
        {/* <DemoWrapper title="Personal Page is in Actively Build">
            <Typography>
              Please visit my{" "}
              <Link href="https://www.linkedin.com/in/zuhuihe/">
                <strong>LinkedIn</strong>
              </Link>{" "}
              page instead for now
            </Typography>
          </DemoWrapper>
          <DemoWrapper title="CSS Module Demo">
            <ModuledStyleDemo />
          </DemoWrapper>
          <DemoWrapper title="Dynamic Import Demo">
            <DynamicImportDemo />
          </DemoWrapper>
          <DemoWrapper title="Apollo Graphql Demo">
            <ApolloGraphqlDemo />
          </DemoWrapper> */}
      </Grid>
      {/* </Container> */}
    </Fragment>
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
