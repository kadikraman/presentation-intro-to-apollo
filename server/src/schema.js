import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Element {
   atomicNumber: ID!
   symbol: String
   name: String
   cpkHexColor: String
   electronicConfiguration: String
   electronegativity: Float
   atomicRadius: Int
   ionRadius: String
   vanDelWaalsRadius: Int
   ionizationEnergy: Int
   electronAffinity: Int
   oxidationStates: String
   standardState: String
   bondingType: String
   meltingPoint: Int
   boilingPoint: Int
   density: Float
   groupBlock: String
   yearDiscovered: Int
}

type Query {
   elements: [Element]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
