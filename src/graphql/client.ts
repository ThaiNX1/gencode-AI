import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { API_ENDPOINTS } from './api';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client; 