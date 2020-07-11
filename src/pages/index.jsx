import React from "react";
import PropTypes from "prop-types";
import Promise from "bluebird";
import { Grid } from "@material-ui/core";
import AvatarImage from "../client/js/components/Home/AvatarImage";
import NameTitle from "../client/js/components/Home/NameTitle";
import Summary from "../client/js/components/Home/Summary";

export default function Index(props) {
  const { shows } = props;  // eslint-disable-line

  return (
    <Grid container direction="column">
      <AvatarImage />
      <NameTitle />
      <Summary />
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
