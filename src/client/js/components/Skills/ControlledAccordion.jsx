import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { get } from "lodash";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "90%",
    background: theme.palette.panel.dark,
  },
}));

export class AccordionData {
  /**
   *
   * @param {React.Component | React.Component[]} summary
   * @param {React.Component | React.Component[]} detail
   * @param {String} group
   */
  constructor(summary, detail, group) {
    this.summary = summary;
    this.detail = detail;
    this.group = group;
  }
}

export default function ControlledAccordion({ dataArray }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(get(dataArray, "0.group", false));
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container justify="center">
      {dataArray.map(({ summary, detail, group }, i) => (
        <Accordion
          key={i}
          expanded={expanded === group}
          onChange={handleChange(group)}
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {summary}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container item xs={12}>
              {detail}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
ControlledAccordion.propTypes = {
  dataArray: PropTypes.arrayOf(AccordionData),
};
