import React, { useState } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { get } from "lodash";

const useStyles = makeStyles(
  (theme: { palette: { panel: { dark: string } } }) => ({
    accordion: {
      width: "100%",
      background: theme.palette.panel.dark,
    },
    gridOuter: {
      width: "100%",
    },
    gridInner: {
      width: "90%",
    },
    gridDetail: {
      maxHeight: "60vh",
      overflow: "auto",
    },
  }),
);

export class AccordionData {
  summary: React.ReactChild | React.ReactChild[];
  detail: React.ReactChild | React.ReactChild[];
  group: string;
  constructor(
    summary: React.ReactChild | React.ReactChild[],
    detail: React.ReactChild | React.ReactChild[],
    group: string,
  ) {
    this.summary = summary;
    this.detail = detail;
    this.group = group;
  }
}

export default function ControlledAccordion({ dataArray }: { dataArray: AccordionData[] }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(get(dataArray, "0.group", false));
  const handleChange = (panel: string) => (event: React.ChangeEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container justify="center" className={classes.gridOuter}>
      <Grid item className={classes.gridInner} container direction="column">
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
              <Grid item xs={12} className={classes.gridDetail}>
                {detail}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}
