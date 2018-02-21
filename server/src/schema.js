import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Profile {
  id: ID!
  firstName: String
  lastName: String
  occupation: String
  company: String
  numberOfPets: Int
}

type Query {
   me: Profile
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
