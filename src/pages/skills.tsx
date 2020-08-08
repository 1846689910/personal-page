import React, { useContext, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import Skill from "../client/js/components/Skills/Skill";
import GraphqlContext from "../client/js/components/GraphqlContext";

interface ISkill {
  name: string;
  value: number;
}

export default function Skills() {
  const { queryWebSkills, queryDataSkills, getQuerySkill } = useContext(GraphqlContext);
  const [webSkills, setWebSkills] = useState([] as ISkill[]);
  const [dataSkills, setDataSkills] = useState([] as ISkill[]);
  useEffect(() => {
    if (queryWebSkills.data) {
      setWebSkills(queryWebSkills.data.webSkills as ISkill[]);
    }
    if (queryDataSkills.data) {
      setDataSkills(queryDataSkills.data.dataSkills as ISkill[]);
    }
  }, [queryWebSkills, queryDataSkills]);
  const querySkill = getQuerySkill({ name: "TypeScript" });
  console.log(querySkill);
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
