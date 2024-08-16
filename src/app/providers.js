"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "@/libs/apolloClient";

export function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <CacheProvider>{children}</CacheProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
