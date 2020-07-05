import React from "react";
import { Typography } from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import Skill from "../client/js/components/Skills/Skill";

const webSkills = [
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
];

const dataSkills = [
  { name: "JavaScript", value: 85, src: "/skills-icon/js.png" },
  { name: "Node.js", value: 75, src: "/skills-icon/node-js.png" },
];

export default function Skills() {
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
  return <ControlledAccordion dataArray={dataArray} />;
}
