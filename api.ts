import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://rtkqueryhasuracodegen.hasura.app/v1beta1/relay', {
  headers: { 'x-hasura-admin-secret': 'CQ0Fnw0bJs9muIeyASCzocZNEdeqZ8VU9xKGQ8VunFyR8OZr7cZJe6bgt595cacg' },
});

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
