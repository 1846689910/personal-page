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
            range: "Aug 2019 - Now",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            summary:
              "Maintained Electrode project of Walmart Labs and developed new features and for Electrode application and updated documentation",
            details: [
              "Updated sample project setup instructions in CONTRIBUTING.MD",
              "Added hapi-app sample to Electrode project samples",
              "Wrote Electrode-CCM-Middleware for Electrode Express project and wrote related tests with Mocha",
              "Added command line in Electrode to create and support Koa sample app by using koa, koa-router, koa-static and koa-connect",
              "Fixed config ui parameter bug and inline source map missing issue",
              "Added new features that enable users to configure the babel preset environment targets for different ES versions in client side and node versions in server side",
              "Built my own react project starters for both Client Side Rendering(CSR) and Server Side Rendering(SSR), both of which combine mocha tests, jest tests, integration tests with chrome driver and selenium, babel transpile command line and Hot Module Replacement(HMR) by webpack-dev-server and webpack-dev-middleware & webpack-hot-middleware",
              "Created User Configurable Env Target to enable user to configure babel environment target and generate various bundles and detect to use bundles via browserslist-useragent",
              "Solved issues for other teams to migrate to latest electrode archetype and implemented differential bundle servings",
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
            title: "Software Engineer Contract, Walmart Labs, Sunnyvale, CA",
            range: "Jan 2019 - Aug 2019",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            summary:
              "Develop large scale data processing pipelines and maintain and develop new features for internal web applications",
            details: [
              "Develop several FusionX applications to enable map match data analysis and routing analysis",
              "Develop new features and maintain internal map app Reddwarf and other pipeline related web apps (Redorbit, Pipeline-studio)",
              "Update JobArtifacts and do regressing test for the job with specific input and setup, and publish job artifacts",
              "Update Pipeline dependencies and publish and run pipelines on real data in Hadoop filesystem",
              "Maintain and update probe data related pipelines by using Spark 2 and Scala 2.11",
              "Work with other teams to address radar issues for our probe data related pipelines",
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
            avatarSrc: INSTITUTE_ICON_PATH.APPLE,
            title: "Full Stack Engineer contract, Apple Inc, Cupertino, CA",
            range: "Jan 2018 - Jan 2019",
          }}
        />
      ),
      (
        <ExpItem
          {...{
            summary:
              "Developed Reddwarf - a data visualization app for map data analysis and data science team internally use and manage user list",
            details: [
              "Designed front end webpage including map, controls and login components and managed components life cycle by using React.JS.",
              "Designed a map and multiple controls for user to manipulate views of map tilesets, including zoom control and display, latitude and longitude display by using Leaflet JavaScript library and its inbuilt method.",
              "Designed and realized multiple controls and add-on functions to the map app, including base layers switch, overlay layers add on function, and layer opacity slider by using JavaScript.",
              "Designed hot key for features including tilesets sliding show, copy current latitude, longitude and zoom information",
              "Support URL service for other applications, including FusionX",
              "Designed drag-and-drop to adjust overlay layers order function by using JQuery and JQuery UI",
              "Designed infinite scrolling for long tiles list acquire by AJAX from backend server and blur matching function by keywords with JavaScript.",
              "Created the backend web server by using Play framework 2.6, Java and Scala",
              "Created controllers and models to build tilesets list by retrieving data from HDFS and send JSON data and octet stream to front end page",
              "Created LRU Cache and other Cache to store used tileset configuration data, Map Directory Reader and other tiles related objects",
              "Designed groups management system for team leaders to group users and manage white list, black list and priority levels of different groups and control different users’ authority level to view tilesets",
              "Created Cache Watcher and clear mechanism to periodically clear file reader cache and configuration cache",
              "Provided REST API to support other software and applications including QGIS, some Pipeline file services and well managed concurrency and multithread issue",
            ],
          }}
        />
      ),
      "Apple California Contract",
    ),
  ];
  return <ControlledAccordion dataArray={dataArray} />;
}
