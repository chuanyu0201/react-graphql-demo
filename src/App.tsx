import React, {ReactNode} from 'react';
import './App.css';
import {client} from "./graphql/apollo";
import {ApolloProvider} from "@apollo/client";
import RouteRoot from "./Routes";

function App() {
  return (
    <AppRoot>
      <RouteRoot/>
    </AppRoot>
  );
}

const AppRoot = ({children}: { children: ReactNode }) => {
  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
}

export default App;
