// Import React
import React from 'react';
import deepmerge from 'deepmerge';
import createTheme from 'spectacle/lib/themes/default';
import createCustomTheme from 'spectacle-theme-nova';
import { Deck, Heading, Slide, CodePane, Image } from 'spectacle';
import orangeSrc from '../assets/orange.jpg';

const theme = deepmerge(createTheme(), createCustomTheme());

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="heading">
            Getting started with Apollo GraphQL
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            an optinionated end to end journey with
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            with Node.js and React
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="heading">
            Getting started with GraphQL
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="heading">
            Apollo
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            Industry leader in GraphQL tooling
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="heading">
            Node.js
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            JavaScripts all the way down
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>React</Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            Arguably the best UI framework
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>End to end</Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            See how ALL the pieces fit together
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Optinionated</Heading>
          <Heading margin="10px 0 40px 0" textColor="tertiary" size={4} bold>
            There's many ways to peel an orange. Here's how I would do it.
          </Heading>
          <Image src={orangeSrc} />
        </Slide>
        <Slide>
          <Heading size={2}>GraphQL</Heading>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CodePane
              style={{
                padding: '20px',
                width: '33%',
                display: 'inline-block',
                minWidth: '33%',
              }}
              margin="20px auto"
              lang="graphql"
              source={require('raw-loader!../assets/graphqlExampleTypes.example')}
            />
            <CodePane
              style={{
                padding: '20px',
                width: '33%',
                display: 'inline-block',
                minWidth: '33%',
              }}
              margin="20px auto"
              lang="graphql"
              source={require('raw-loader!../assets/graphqlExample.example')}
            />
            <CodePane
              style={{
                padding: '20px',
                width: '33%',
                display: 'inline-block',
                minWidth: '33%',
              }}
              margin="20px auto"
              lang="json"
              source={require('raw-loader!../assets/graphqlExampleResult.example')}
            />
          </div>
        </Slide>
      </Deck>
    );
  }
}
