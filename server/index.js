// server/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
    const app = express();
    app.use(cors({ origin: 'http://localhost:3000' }));

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
}

startServer().catch(error => {
    console.error('Server failed to start:', error);
});