import React from 'react';
import { IEventEmitter } from '../interfaces';

type AppProps = {
  rssEmitter:IEventEmitter;
};

function App({ rssEmitter }: AppProps) {
  return <div>Hello world!</div>;
}

export default App;
