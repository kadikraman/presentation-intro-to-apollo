import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Panel,
  ControlLabel,
  FormControl,
  Button,
  FormGroup,
} from 'react-bootstrap';
import { Formik } from 'formik';

const profileQuery = gql`
  {
    me {
      id
      firstName
      lastName
      occupation
      company
      numberOfPets
    }
  }
`;

const Profile = ({ data: { loading, error, me } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <div style={{ width: '500px', textAlign: 'left' }}>
        <Panel bsStyle="primary">
          <Panel.Heading>Edit your profile</Panel.Heading>

          <Panel.Body>
            <Formik
              initialValues={me}
              validate={() => {}}
              onSubmit={() => {}}
              render={({
                dirty,
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <ControlLabel>First name</ControlLabel>
                    <FormControl
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      placeholder="First name"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Last name</ControlLabel>
                    <FormControl
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      placeholder="Last name"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Occupation</ControlLabel>
                    <FormControl
                      type="text"
                      name="occupation"
                      value={values.occupation}
                      placeholder="Occupation"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Company</ControlLabel>
                    <FormControl
                      type="text"
                      name="company"
                      value={values.company}
                      placeholder="Company"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Number of pets</ControlLabel>
                    <FormControl
                      type="number"
                      name="numberOfPets"
                      value={values.numberOfPets}
                      placeholder="Number of pets"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button bsStyle="primary" disabled={!dirty}>
                    Save
                  </Button>
                </form>
              )}
            />
          </Panel.Body>
        </Panel>
      </div>
    </div>
  );
};

export default graphql(profileQuery)(Profile);
