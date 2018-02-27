// Import React
import React from 'react';
import deepmerge from 'deepmerge';
import createTheme from 'spectacle/lib/themes/default';
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
import restSrc from '../assets/rest.jpg';
import formidableLogoRedSrc from '../assets/formidable-red-logo.png';

const theme = createTheme({
  primary: "#007284", // background color really like #009FB7
  secondary: "#AA8239",
  tertiary: "#A43741",
  text: "#FAFAFA",
  heading: "#FED766"
}, {
  primary: { name: "Muli", googleFont: true, styles: [ "400" ] }
});

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

const Note = ({ children }) => (
  <div style={{ marginBottom: '20px' }}>{children}</div>
);


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>

        <Slide>
          <Notes>
            <Note>I'm going to tell you all about getting started with GraphQL</Note>
            <Note>My goal is to give you a better idea of the tools that exist and how easy it is to get started</Note>
          </Notes>
          <LargeHeading margin="10px" bold>
            Getting started with
          </LargeHeading>
          <LargeHeading margin="10px" bold>
            Apollo GraphQL
          </LargeHeading>
          <Text>
            an end to end journey with Node.js and React
          </Text>
          <Text margin="60px 0 0 0" textColor="heading">
            Kadi Kraman 
          </Text>
          <Text>Software Engineer</Text>
          <Text>Formidable Labs</Text>
        </Slide>
        
        <Slide bgColor="black">
          <Notes>
            <Note>Seattle-based software consultancy</Note>
            <Note>We build things in JavaScript... for people who pay us :D</Note>
            <Note>?? verify ?? We're looking for some junior/mid-level developers to join us in London</Note>
            <Note>So if you're into React, React Native, GraphQL... get in touch!</Note>
          </Notes>
          <Image src={formidableLogoRedSrc} />
        </Slide>
        
        <Slide>
          <Notes>
            <Note>GraphQL is the new REST, right?</Note>
            <Note>I'm sure you've all heard of GraphQL and Apollo.</Note>
            <Note>Maybe seen some talks about GraphQL.</Note>
            <Note>Maybe done some queries in a graphQL playground.</Note>
            <Note>Maybe even consumed a GraphQL API.</Note>
            <Note>This talk is about showing what GraphQL looks like end to end, some tools and basically a get started now guide</Note>
          </Notes>
          <LargeHeading fit lineHeight={1}>
            Getting started with GraphQL
          </LargeHeading>
        </Slide>
        
        <Slide>
          <Notes>
            <Note>GraphQL is a query framework by Facebook</Note>
            <Note>Apollo is essentially a suite of graphql tools, completely independent of the language itself</Note>
            <Note>Apollo tools are not the only ones available for building your graphql servers and clients, but they are the most mature</Note>
          </Notes>  
          <MediumHeading>Apollo</MediumHeading>
          <Text>
            Industry leader in GraphQL tooling
          </Text>
        </Slide>
        
        <Slide>
          <Notes>
            <Note>You can write a graphql server in any language, but node.js is convenient, because it's very accessible for frontend engineers</Note>
            <Note>Also it's what I have the most experience in</Note>
          </Notes>
          <MediumHeading>Node.js</MediumHeading>
          <Text>
            JavaScripts all the way down
          </Text>
        </Slide>
        
        <Slide>
          <Notes>
            <Note>I'm biased towards React as I've been building apps in React for a few years now and it's great</Note>
          </Notes>
          <MediumHeading>React</MediumHeading>
          <Text>
            My favourite UI framework
          </Text>
        </Slide>
        
        <Slide>
          <MediumHeading>End to end</MediumHeading>
          <Text>
            See how ALL the pieces fit together
          </Text>
        </Slide>
        
        <Slide>
          <MediumHeading>Optinionated</MediumHeading>
          <Text margin="0 0 40px 0">
            There's many ways to do it. Here's one.
          </Text>
          <Image src={orangeSrc} />
        </Slide>
        
        <Slide>
          <Notes>
            <Note>I am assuming that everyone here has some knowledge of GraphQL already, even if you've never actually built anything with it yourself</Note>
            <Note>So this is just a very brief recap</Note>
            <Note>Let's talk about GraphQL</Note>
          </Notes>
          <MediumHeading>GraphQL</MediumHeading>
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
        
        <Slide bgImage={restSrc}>
          <Notes>
            GraphQL and REST are not so different after all
            GraphQL has some small changes that make a big difference to the
            developer experience of building and consuming an API
          </Notes>
          <div style={{ backgroundColor: 'rgba(0,0,0,.5)', padding: '10px' }}>
            <LargeHeading textColor="white" fit>GraphQL vs REST</LargeHeading>
          </div>
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
        
        <Slide> 
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/graphqlGet.example')}
          />
        </Slide>
        
        <Slide bgColor="white">
          <Image src={restVsGraphqlSrc} />
        </Slide>
        
        <Slide>
          <Notes>
            <Note>These are the graphql packages necessary to build a full stack graphql app</Note>
            <Note>The graphql package is from facebook, but all the other packages are from Apollo</Note>
            <Note>They used to basically have one massive monorepo, but have since broken it apart, hence all the separate libraries</Note>
            <Note>If you look up the libraries on GitHub you can see they're under the Apollo Graphql org</Note>
          </Notes>
          <MediumHeading> 
            To build a GraphQL server...
          </MediumHeading>
          <Text>
            graphql
          </Text>
          <Text>
            graphql-tools
          </Text>
          <Text margin="10px 0 40px 0">
            apollo-server-express
          </Text>
          <MediumHeading>
            To build a React frontend...
          </MediumHeading>
          <Text>
            graphql
          </Text>
          <Text>
            react-apollo
          </Text>
          <Text>
            graphql-tag
          </Text>
        </Slide>
      
      </Deck>
    );
  }
}
