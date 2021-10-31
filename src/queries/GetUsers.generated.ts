import * as Types from '../generated/graphql';

import { api } from '../../api';
export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users_connection: { __typename?: 'usersConnection', edges: Array<{ __typename?: 'usersEdge', node: { __typename?: 'users', id: string, email?: string | null | undefined } }> } };


export const GetUsersDocument = `
    query GetUsers {
  users_connection(first: 10) {
    edges {
      node {
        id
        email
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetUsers: build.query<GetUsersQuery, GetUsersQueryVariables | void>({
      query: (variables) => ({ document: GetUsersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


