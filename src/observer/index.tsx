import React from 'react';
import ReactDOM from 'react-dom';
import RSSFeedEmitter from 'rss-feed-emitter';
import App from './components/App';
import RSSEventMediator from './RSSEventMediator';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App rssEmitter={new RSSEventMediator(new RSSFeedEmitter())} />,
  document.getElementById('root'),
);
