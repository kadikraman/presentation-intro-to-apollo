const kadiProfile = {
  id: 1,
  firstName: 'Kadi',
  lastName: 'Kraman',
  occupation: 'Software Engineer',
  company: 'Formidable Labs',
  numberOfPets: 0,
};

export const resolvers = {
  Query: {
    me: () => {
      return kadiProfile;
    },
  },
};
