import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './src/schema';

const PORT = 4000;

const server = express();

server.use(cors());

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

server.get('/', function(req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
