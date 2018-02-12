import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const elementsListQuery = gql`
  {
    elements {
      atomicNumber
      symbol
      name
    }
  }
`;

const ElementsList = ({ data: { loading, error, elements } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {elements.map(el => (
        <li key={el.atomicNumber}>
          {el.name} ({el.symbol})
        </li>
      ))}
    </ul>
  );
};

export default graphql(elementsListQuery)(ElementsList);
