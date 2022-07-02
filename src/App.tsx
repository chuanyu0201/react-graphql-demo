import React, {ReactNode} from 'react';
import './App.css';
import {client} from "./graphql/apollo";
import {ApolloProvider} from "@apollo/client";

function App() {
  return (
    <AppRoot>
      <div className="App"/>
    </AppRoot>
  );
}

const AppRoot = ({children}: { children: ReactNode }) => {
  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
}

export default App;
