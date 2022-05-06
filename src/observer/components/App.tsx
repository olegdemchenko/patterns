import React from 'react';
import { IEventEmitter } from '../interfaces';
import AppContainer from './Container';
import Header from './Header';
import Feeds from './Feeds';

type AppProps = {
  rssEmitter:IEventEmitter;
};

function App({ rssEmitter }: AppProps) {
  return (
    <AppContainer>
      <Header />
      <Feeds rssEmitter={rssEmitter} />
    </AppContainer>
  );
}

export default App;
