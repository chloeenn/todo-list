
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import Layout from 'src/components/Layout';

function App() {
  return (
    <ApolloProvider client={client}>
    <Layout />
    </ApolloProvider>
  );
}

export default App;