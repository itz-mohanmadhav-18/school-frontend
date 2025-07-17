import { ApolloClient, InMemoryCache , createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri:'http://localhost:4000/',//backend graphql endpoint
    credentials : 'include',//for Http-only cookies
});

export const apolloClient = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache(),
});