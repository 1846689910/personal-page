import React from "react";
import { Typography } from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import Skill from "../client/js/components/Skills/Skill";

interface ISkill {
  name: string;
  value: number;
}

export default function Skills({
  webSkills,
  dataSkills,
}: {
  webSkills: ISkill[];
  dataSkills: ISkill[];
}) {
  const dataArray = [
    new AccordionData(
      <Typography>Web Development</Typography>,
      webSkills.map((x: ISkill, i: number) => <Skill {...x} key={i} />),
      "web",
    ),
    new AccordionData(
      <Typography>Data Engineering</Typography>,
      dataSkills.map((x: ISkill, i: number) => <Skill {...x} key={i} />),
      "data",
    ),
  ];
  return <ControlledAccordion dataArray={dataArray} />;
}

/**
 * @param {Object} context { env }
 */
export async function getStaticProps(context) {
  // eslint-disable-line
  const webSkills: ISkill[] = [
    { name: "JavaScript", value: 85 },
    { name: "TypeScript", value: 80 },
    { name: "Node.js", value: 85 },
    { name: "Java", value: 79 },
    { name: "React", value: 89 },
    { name: "Redux", value: 89 },
    { name: "Next.js", value: 87 },
    { name: "Express", value: 75 },
    { name: "Hapi", value: 70 },
    { name: "Koa", value: 70 },
    { name: "Apollo GraphQL", value: 77 },
    { name: "Mocha", value: 82 },
    { name: "Jest", value: 80 },
    { name: "Sinon", value: 85 },
    { name: "Enzyme", value: 75 },
    { name: "Material-UI", value: 87 },
    { name: "MongoDB", value: 79 },
    { name: "MySQL", value: 80 },
    { name: "PostgreSQL", value: 78 },
    { name: "HTML5", value: 83 },
    { name: "CSS3", value: 87 },
  ];

  const dataSkills: ISkill[] = [
    { name: "Scala", value: 80 },
    { name: "Hadoop", value: 73 },
    { name: "Spark", value: 75 },
    { name: "Python", value: 75 },
  ];

  return {
    props: {
      webSkills,
      dataSkills,
    },
  };
}
