import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  Paper,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Skill from "../client/js/components/Skills/Skill";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "70vh",
    overflow: "scroll",
  },
  accordion: {},
}));

const webSkills = [
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
];

const dataSkills = [
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
];

export default function Skills() {
  const classes = useStyles();
  const dataArray = [
    new AccordionData(
      <Typography>Web Development</Typography>,
      webSkills.map((x, i) => <Skill {...x} key={i} />),
      "web",
    ),
    new AccordionData(
      <Typography>Data Engineering</Typography>,
      dataSkills.map((x, i) => <Skill {...x} key={i} />),
      "data",
    ),
  ];
  return (
    <ControlledAccordion dataArray={dataArray}/>
  );
}
