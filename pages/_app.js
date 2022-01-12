import '../styles/globals.css'
import { AuthContextProvider } from "../stores/authContext";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../apollo.ts";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>

  )
}

export default MyApp
