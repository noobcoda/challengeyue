import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://graphql.fauna.com/graphql",
});


const CLIENT_SECRET = 
    process.env.FAUNADB_ADMIN_KEY || process.env.FAUNADB_SECRETCLIENT

const authLink = setContext((_,{ headers }) => {
    
    //return headers to context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${CLIENT_SECRET}`,
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;