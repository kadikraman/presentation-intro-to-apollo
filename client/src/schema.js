export const typeDefs = `
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
