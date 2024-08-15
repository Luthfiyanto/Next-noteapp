import { ApolloProvider } from "@apollo/client";
import client from "@/libs/apolloClient";
import "@/app/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
