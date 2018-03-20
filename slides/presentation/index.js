// Import React
import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Deck, Heading, Slide, CodePane, Image, Notes } from 'spectacle';
import restSrc from '../assets/rest.jpg';
import formidableLogoRedSrc from '../assets/formidable-red-logo.png';
import apolloWebsiteSrc from '../assets/apollo-website.png';
import apolloLogoSrc from '../assets/apollo-logo.png';
import reallySrc from '../assets/really.png';

const theme = createTheme(
  {
    primary: '#2A363B', // background
    secondary: '#AA8239',
    tertiary: '#A43741',
    text: '#FAFAFA',
    heading: '#FF847C',
  },
  {
    primary: { name: 'Muli', googleFont: true, styles: ['400'] },
  }
);

const LargeHeading = ({ children, ...props }: any) => (
  <Heading lineHeight={1.2} size={3} textColor="heading" {...props}>
    {children}
  </Heading>
);

const MediumHeading = ({ children, ...props }: any) => (
  <Heading lineheight={1.2} size={3} textColor="heading" {...props}>
    {children}
  </Heading>
);

const Text = ({ children, ...props }: any) => (
  <Heading margin="10px 0 0" textColor="text" size={6} {...props}>
    {children}
  </Heading>
);

const Note = ({ children }: any) => (
  <div style={{ marginBottom: '20px' }}>{children}</div>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Notes>
            <Note>
              I'm going to tell you all about getting started with GraphQL
            </Note>
            <Note>
              My goal is to give you a better idea of the tools available and
              hopefully provide some motivation and excitement to try it out
              yourself
            </Note>
          </Notes>
          <LargeHeading margin="10px" bold>
            Getting started with
          </LargeHeading>
          <LargeHeading margin="10px" bold>
            Apollo GraphQL
          </LargeHeading>
          <Text>an end to end journey with Node.js and React</Text>
          <Text margin="60px 0 0 0" textColor="heading">
            Kadi Kraman
          </Text>
          <Text>Software Engineer</Text>
          <Text>Formidable Labs</Text>
        </Slide>

        <Slide>
          <Notes>
            <Note>Seattle-based software consultancy</Note>
            <Note>
              We build things in JavaScript... for people who pay us :D
            </Note>
            <Note>
              ?? verify ?? We're looking for some junior/mid-level developers to
              join us in London
            </Note>
            <Note>
              So if you're into React, React Native, GraphQL... get in touch!
            </Note>
          </Notes>
          <Image src={formidableLogoRedSrc} />
        </Slide>

        <Slide>
          <Notes>
            <Note>
              This is from the graphQL official webstite, but it's a great
              little example
            </Note>
            <Note>First, describe your whole data (in this case...)</Note>
            <Note>Then, ask for the exact bits you want</Note>
            <Note>
              Receive your results. Notice name and contributors are not
              returned
            </Note>
          </Notes>
          <LargeHeading margin="40px" bold>
            GraphQL in a nutshell
          </LargeHeading>
          <Image src={apolloWebsiteSrc} />
        </Slide>

        <Slide>
          <LargeHeading>GaphQL is not a tool - it's a standard 🤔</LargeHeading>
          <Notes>
            <Note>
              GraphQL is not a library or a framework - it is just a syntax
            </Note>
            <Note>
              everyone can build their tools according to that standard.
            </Note>
            <Note>
              I know we're all primarily doing Node.js here, but GraphQL can be
              implemented in any language
            </Note>
            <Note>It is framework and language agnostic</Note>
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            <Note>GraphQL and REST are not so different after all</Note>
            <Note>
              GraphQL has some small changes that make a big difference to the
              developer experience of building and consuming an API
            </Note>
          </Notes>
          <LargeHeading margin="20px">GraphQL vs REST</LargeHeading>
          <Image src={restSrc} />
        </Slide>

        <Slide>
          <Notes>
            <Note>
              Imagine we're querying a movie database and we're interested in
              the first name of a director of a particular movie
            </Note>
            <Note>
              This is a rest query for getting the data for a movie with id 1
            </Note>
            <Note>
              Notice we're not in control of the data we're receiving other than
              which movie it's for
            </Note>
          </Notes>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/restGet.example')}
          />
        </Slide>

        <Slide>
          <Notes>
            <Note>
              Furthermore, depending on the API, you might have to do two
              requests to get the director's info
            </Note>
          </Notes>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/restGetLonger.example')}
          />
        </Slide>

        <Slide>
          <Notes>
            <Note>
              Notice we can ask for just the fields we're interested in and have
              no surperfulous data
            </Note>
          </Notes>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/graphqlGet.example')}
          />
        </Slide>

        <Slide>
          <Notes>
            <Note>
              Apollo is a product of a company - Meteor Development Group
            </Note>
            <Note>Number one graphql client to date</Note>
            <Note>What does it mean to be a "graphql client"</Note>
            <Note>
              You know the kind of stuff you need to do when working with APIs?
            </Note>
            <Note>Fetching the data</Note>
            <Note>Transform the response</Note>
            <Note>Normalising it</Note>
            <Note>Caching it</Note>
            <Note>
              With Apollo you can forget about all that as it will all be done
              for you
            </Note>
            <Note>
              Bonus: the client is decoupled from the view layer so any frontend
              framework can be used. I'm going to show an example with React,
              but there are correcponding packages for Angular and Vue.js
            </Note>
          </Notes>
          <Image src={apolloLogoSrc} />
        </Slide>

        <Slide>
          <LargeHeading width="100%">Server</LargeHeading>
          <Text>Implements the GraphQL spec</Text>
          <Text>May use multiple data sources internally</Text>
          <LargeHeading margin="40px 0 0 0">Client</LargeHeading>
          <Text>Asks for only the data it needs from the agreed schema</Text>
          <Text>Caches old query results and reuses when applicable</Text>
        </Slide>

        <Slide>
          <Notes>
            <Note>
              These are the graphql packages necessary to build a full stack
              graphql app
            </Note>
            <Note>
              The graphql package is from facebook, but all the other packages
              are from Apollo
            </Note>
            <Note>
              They used to basically have one massive monorepo, but have since
              broken it apart, hence all the separate libraries
            </Note>
            <Note>
              If you look up the libraries on GitHub you can see they're under
              the Apollo Graphql org
            </Note>
            <Note>Have also packages for lambda, azure-functions, hapi</Note>
          </Notes>
          <MediumHeading>To build a GraphQL server...</MediumHeading>
          <Text>graphql</Text>
          <Text>graphql-tools</Text>
          <Text margin="10px 0 40px 0">apollo-server-express</Text>
        </Slide>

        {/* TODO: video recording of building a graphql server */}

        <Slide>
          <Notes>
            <Note>
              E.g. hmm I need some more data but not sure what the name of the
              field is
            </Note>
            <Note>
              This is kind of unheard of in REST so can be a bit hard to believe
            </Note>
          </Notes>
          <Text margin="20px">What if I told you...</Text>
          <Text margin="20px">
            that you can have autocomplete for your query?
          </Text>
          <Image src={reallySrc} />
        </Slide>

        {/* TODO: graphiQL demo */}

        {/* TODO: (maybe) Apollo link */}
        {/* TODO: (maybe) Apollo link rest */}

        <Slide>
          <MediumHeading>To build a React frontend...</MediumHeading>
          <Text>graphql</Text>
          <Text>react-apollo</Text>
          <Text>graphql-tag</Text>
        </Slide>
      </Deck>
    );
  }
}
