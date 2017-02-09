import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

class App extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Create React App
          </Heading>
          <Heading size={1} fit caps>
            Phoenix ReactJS February 2017
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Introduction
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            What is Create React App?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What is Create React App?</Heading>
          <List>
            <Appear><ListItem textColor="secondary">Create React applications with little to no configuration</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Provides a rapid development environment</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Builds production-ready bundles</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Why use Create React App?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Why use Create React App?</Heading>
          <List>
            <Appear><ListItem textColor="secondary">Start writing code immediately</ListItem></Appear>
            <Appear><ListItem textColor="secondary">See code changes instantly</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Great support, maintained by Facebook</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Demo
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Use Cases
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Use Cases</Heading>
          <List>
            <Appear><ListItem textColor="secondary">GitHub Pages / Blog</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Desktop app in Electron</ListItem></Appear>
            <Appear><ListItem textColor="secondary">Playground</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

export default App;
