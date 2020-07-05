import React from "react";
import { Typography } from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import Skill from "../client/js/components/Skills/Skill";

const webSkills = [
  { name: "JavaScript", value: 85 },
  { name: "Node.js", value: 85 },
  { name: "Java", value: 79 },
  { name: "React", value: 89 },
  { name: "Redux", value: 89 },
  { name: "Next.js", value: 87 },
  { name: "Express", value: 75 },
  { name: "Hapi", value: 70 },
  { name: "Koa", value: 70 },
  { name: "Apollo GraphQL", value: 77 },
  { name: "Material-UI", value: 87 },
  { name: "MongoDB", value: 79 },
  { name: "MySQL", value: 80 },
  { name: "PostgreSQL", value: 78 },
  { name: "HTML5", value: 83 },
  { name: "CSS3", value: 87 },
];

const dataSkills = [
  { name: "Scala", value: 80 },
  { name: "Hadoop", value: 73 },
  { name: "Spark", value: 75 },
  { name: "Python", value: 75 },
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
