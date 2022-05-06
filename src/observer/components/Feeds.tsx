import React from 'react';
import { IEventEmitter, IObserver, INewsItem } from '../interfaces';

type FeedsProps = {
  rssEmitter: IEventEmitter;
};

type FeedsState = {
  [feedLink: string]: INewsItem[]
};

class Feeds extends React.Component<FeedsProps, FeedsState> implements IObserver {
  private emitter: IEventEmitter;

  constructor(props: FeedsProps) {
    super(props);
    this.state = {};
    this.emitter = props.rssEmitter;
  }

  addFeed = (feed: string): void => {
    this.emitter.registerObserver(feed, this);
    this.setState((state) => ({ ...state, [feed]: [] }));
  };

  removeFeed = (feed: string) => () => {
    this.emitter.unregisterObserver(feed, this);
    this.setState((state) => {
      const filteredState = Object.entries(state).filter(([currFeed]) => currFeed !== feed);
      return Object.fromEntries(filteredState);
    });
  };

  update(event: string, { title, link, date }: INewsItem): void {
    this.setState((state) => ({ ...state, [event]: [...state[event], { title, link, date }] }));
  }
}

export default Feeds;
