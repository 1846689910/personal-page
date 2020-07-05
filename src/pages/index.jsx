import React from "react";
import PropTypes from "prop-types";
import Promise from "bluebird";

export default function Index(props) {
  const { shows } = props;
  return (
    <div>Intro</div>
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
