import React, { createContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QueryResult } from "@apollo/react-common";
import { gql } from "apollo-boost";

export const SKILL = gql`
  query Skill($name: String!) {
    skill(name: $name) {
      name
      value
    }
  }
`;
export const SKILLS = gql`
  {
    skills {
      name
      value
    }
  }
`;
export const WEB_SKILLS = gql`
  {
    webSkills {
      name
      value
    }
  }
`;
export const DATA_SKILLS = gql`
  {
    dataSkills {
      name
      value
    }
  }
`;
export const NAME = gql`
  {
    name
  }
`;
export const TITLE = gql`
  {
    title
  }
`;
export const SUMMARY = gql`
  {
    summary
  }
`;

type GraphqlContextProps = {
  queryName: QueryResult<string, unknown>;
  queryTitle: QueryResult<string, unknown>;
  querySummary: QueryResult<string, unknown>;
  querySkills: QueryResult<string, unknown>;
  queryDataSkills: QueryResult<string, unknown>;
  queryWebSkills: QueryResult<string, unknown>;
  getQuerySkill: (
    variables: Record<string, unknown>,
  ) => QueryResult<string, unknown>;
};

const GraphqlContext = createContext({} as GraphqlContextProps);

export default GraphqlContext;

export const GraphqlContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { Provider } = GraphqlContext;
  const queryName = useQuery(NAME);
  console.log(queryName);
  const queryTitle = useQuery(TITLE);
  const querySummary = useQuery(SUMMARY);
  const querySkills = useQuery(SKILLS);
  const queryWebSkills = useQuery(WEB_SKILLS);
  const queryDataSkills = useQuery(DATA_SKILLS);
  const getQuerySkill = (variables: Record<string, unknown>) =>
    useQuery(SKILL, { variables });

  return (
    <Provider
      value={{
        queryName,
        queryTitle,
        querySummary,
        querySkills,
        queryWebSkills,
        queryDataSkills,
        getQuerySkill,
      }}
    >
      {children}
    </Provider>
  );
};
