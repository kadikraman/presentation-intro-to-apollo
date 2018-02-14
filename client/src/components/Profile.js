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
            <form>
              <FormGroup>
                <ControlLabel>First name</ControlLabel>
                <FormControl
                  type="text"
                  value={me.firstName}
                  placeholder="First name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Last name</ControlLabel>
                <FormControl
                  type="text"
                  value={me.lastName}
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Occupation</ControlLabel>
                <FormControl
                  type="text"
                  value={me.occupation}
                  placeholder="Occupation"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Company</ControlLabel>
                <FormControl
                  type="text"
                  value={me.company}
                  placeholder="Company"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Number of pets</ControlLabel>
                <FormControl
                  type="number"
                  value={me.numberOfPets}
                  placeholder="Number of pets"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button bsStyle="primary">Save</Button>
            </form>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  );
};

export default graphql(profileQuery)(Profile);
