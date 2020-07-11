import React from "react";
import ControlledAccordion, {
  AccordionData,
} from "../client/js/components/Skills/ControlledAccordion";
import ExpItem, { ExpTitle } from "../client/js/components/Experiences/ExpItem";
import { INSTITUTE_ICON_PATH } from "../client/js/constants";

export default function Experiences() {
  const dataArray = [
    new AccordionData(
      (
        <ExpTitle
          {...{
            avatarSrc: INSTITUTE_ICON_PATH.APPLE,
            title: "Software Engineer, Apple Inc, Cupertino, CA",
            range: "Jan 2018 - Now",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            details: [
              "Developed and maintained several React Web Apps widely used within Apple map teams to visualize and analyze map tilesets data, trigger and manage Spark pipelines and jobs",
              "Created several useful FusionX JavaScript Plugins and publish to FusionX app stores to assist developers and data scientists to do map matching analysis, map routing and visualize map tileset data in HDFS",
              "Designed and implemented various Spark pipelines and job artifacts to fulfill large scale data processing and distributed computing",
              "Created web service and PostgreSQL database to manage pipeline and job artifact run status on Hadoop clusters",
              "Published personal projects by React and Next.js for user to build large scale universal web app and services",
              "Worked closely with other map teams to address radar issues for pipelines and apps",
            ],
          }}
        />
      ),
      "Apple California",
    ),
    new AccordionData(
      (
        <ExpTitle
          {...{
            avatarSrc: INSTITUTE_ICON_PATH.WALMART_LABS,
            title: "Software Engineer, Walmart Labs, Sunnyvale, CA",
            range: "Jan 2019 - Aug 2019",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            details: [
              "Created functional Express and Koa middlewares and Hapi plugins for Electrode.io",
              "Developed several function and performance oriented features, including support Koa server, server side rendering, dynamic loading and JavaScript bundle optimization, etc",
              "Wrote unit and integration test cases for components and project packages",
              "Actively addressed public issues on GitHub and JIRA issues reported by other teams",
            ],
          }}
        />
      ),
      "Walmart Labs California",
    ),
    new AccordionData(
      (
        <ExpTitle
          {...{
            avatarSrc: INSTITUTE_ICON_PATH.CHUWA_AMERICA,
            title: "Full Stack Engineer, Chuwa America, San Jose, CA",
            range: "Jan 2017 - Dec 2017",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            details: [
              "Participated in design and implemented internal user management web app project",
              "Created ListView functional components and added sorting and filtering functions",
              "Created Express server with REST API",
              "Designed MongoDB database schema",
            ],
          }}
        />
      ),
      "Apple California Contract",
    ),
  ];
  return <ControlledAccordion dataArray={dataArray} />;
}
