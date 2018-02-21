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
import restVsGraphqlSrc from '../assets/restVsGraphql.png';

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

const Text = ({ children, ...props }: any) => (
  <Heading margin="10px 0 0" textColor="tertiary" size={4} {...props}>
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        <Slide>
          <Notes>A rather intense heading</Notes>
          <LargeHeading fit lineHeight={1}>
            Getting started with Apollo GraphQL
          </LargeHeading>
          <Text>
            an optinionated end to end journey with
          </Text>
          <Text>
            with Node.js and React
          </Text>
        </Slide>
        <Slide>
          <LargeHeading fit lineHeight={1}>
            Getting started with GraphQL
          </LargeHeading>
        </Slide>
        <Slide>
          <MediumHeading>Apollo</MediumHeading>
          <Text>
            Industry leader in GraphQL tooling
          </Text>
        </Slide>
        <Slide>
          <MediumHeading>Node.js</MediumHeading>
          <Text>
            JavaScripts all the way down
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>React</Heading>
          <Text>
            My favourite UI framework
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>End to end</Heading>
          <Text>
            See how ALL the pieces fit together
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>Optinionated</Heading>
          <Text>
            There's many ways to peel an orange. Here's how I would do it.
          </Text>
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
            <Text textColor="heading" size={3}>
              1. Build a GraphQL server
            </Text>
            <Text>
              graphql
            </Text>
            <Text>
              graphql-tools
            </Text>
            <Text margin="10px 0 20px 0">
              apollo-server-express
            </Text>
            <Text textColor="heading" size={3}>
              2. Build a frontend to consume it
            </Text>
            <Text>
              graphql
            </Text>
            <Text>
              react-apollo
            </Text>
            <Text>
              graphql-tag
            </Text>
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
        <Slide bgColor="white">
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/restGetLonger.example')}
          />
        </Slide>
        <Slide>
          <Image src={restVsGraphqlSrc} />
        </Slide>
      </Deck>
    );
  }
}
