// Import React
import React from 'react';
import deepmerge from 'deepmerge';
import createTheme from 'spectacle/lib/themes/default';
import createCustomTheme from 'spectacle-theme-nova';
import {
  Deck,
  Heading,
  Slide,
  CodePane,
  Image,
  Quote,
  Cite,
  Notes,
} from 'spectacle';
import orangeSrc from '../assets/orange.jpg';

const theme = deepmerge(createTheme(), createCustomTheme());

const LargeHeading = ({ children, ...props }: any) => (
  <Heading size={1} textColor="heading" {...props}>
    {children}
  </Heading>
);

const MediumHeading = ({ children, ...props }: any) => (
  <Heading size={2} textColor="heading" {...props}>
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        <Slide>
          <LargeHeading fit lineHeight={1}>
            Getting started with Apollo GraphQL
          </LargeHeading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            an optinionated end to end journey with
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            with Node.js and React
          </Heading>
        </Slide>
        <Slide>
          <LargeHeading fit lineHeight={1}>
            Getting started with GraphQL
          </LargeHeading>
        </Slide>
        <Slide>
          <MediumHeading>Apollo</MediumHeading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            Industry leader in GraphQL tooling
          </Heading>
        </Slide>
        <Slide>
          <MediumHeading>Node.js</MediumHeading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            JavaScripts all the way down
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>React</Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
            My favourite UI framework
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
        <Slide>
          <Heading size={2}>Agenda</Heading>
          <div style={{ textAlign: 'left' }}>
            <Heading margin="10px 0 0" textColor="heading" size={3} bold>
              1. Build a GraphQL server
            </Heading>
            <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
              graphql
            </Heading>
            <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
              graphql-tools
            </Heading>
            <Heading margin="10px 0 20px 0" textColor="tertiary" size={4} bold>
              apollo-server-express
            </Heading>
            <Heading margin="10px 0 0" textColor="heading" size={3} bold>
              2. Build a frontend to consume it
            </Heading>
            <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
              graphql
            </Heading>
            <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
              react-apollo
            </Heading>
            <Heading margin="10px 0 0" textColor="tertiary" size={4} bold>
              graphql-tag
            </Heading>
          </div>
        </Slide>
        <Slide>
          <Notes>Such test note</Notes>
          <Heading size={2}>GraphQL vs REST</Heading>
        </Slide>
        <Slide>
          <Quote>GraphQL and REST are not so different after all</Quote>
          <Cite>
            Sashko Stubailo (open source lead at @apollographql and @meteorjs)
          </Cite>
        </Slide>
        <Slide>
          <Quote>
            GraphQL has some small changes that make a big difference to the
            developer experience of building and consuming an API
          </Quote>
          <Cite>
            Sashko Stubailo (open source lead at @apollographql and @meteorjs)
          </Cite>
        </Slide>
        <Slide>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/restGet.example')}
          />
        </Slide>
        <Slide>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/restGetLonger.example')}
          />
        </Slide>
      </Deck>
    );
  }
}
