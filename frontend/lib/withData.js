import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost'; //has all of the packages that go with Apollo CLient - caching, http, error, link-state
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
