import elements from './elements';

export const resolvers = {
  Query: {
    elements: () => {
      return elements;
    },
  },
};
