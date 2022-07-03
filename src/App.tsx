import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "./graphql/apollo";
import RouteRoot from "./Routes";
import 'antd/dist/antd.css'
import './tailwind/tailwind.css'

function App() {
  return (
    <AppRoot>
      <RouteRoot />
    </AppRoot>
  );
}

const AppRoot = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default App;
