import React from 'react';
import { IEventEmitter } from '../interfaces';
import Container from './Container';
import Header from './Header';
import Feeds from './Feeds';

type AppProps = {
  rssEmitter:IEventEmitter;
};

function App({ rssEmitter }: AppProps) {
  return (
    <Container>
      <Header />
      <Feeds />
    </Container>
  );
}

export default App;
