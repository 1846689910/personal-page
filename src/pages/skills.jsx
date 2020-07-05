import React from "react";
import { Typography } from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import Skill from "../client/js/components/Skills/Skill";
import { SKILLS_ICON_PATH } from "../client/js/constants";

const webSkills = [
  { name: "JavaScript", value: 85, src: SKILLS_ICON_PATH.JS },
  { name: "Node.js", value: 75, src: SKILLS_ICON_PATH.NODE_JS },
  { name: "Java", value: 75, src: SKILLS_ICON_PATH.JAVA },
];

const dataSkills = [
  { name: "JavaScript", value: 85, src: SKILLS_ICON_PATH.JS },
  { name: "Node.js", value: 75, src: SKILLS_ICON_PATH.NODE_JS },
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
