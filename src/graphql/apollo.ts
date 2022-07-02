import {ApolloClient, InMemoryCache} from "@apollo/client";
import {GRAPHQL_ENDPOINT} from "./config";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_ENDPOINT,
});
