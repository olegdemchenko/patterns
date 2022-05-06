import React from 'react';
import { IEventEmitter, IObserver, INewsItem } from '../interfaces';
import AddFeed from './AddFeed';
import FeedsList from './FeedsList';
import FeedNewsList from './FeedsNewsList';

type FeedsProps = {
  rssEmitter: IEventEmitter;
};

type FeedsState = {
  currentFeed: string,
  feeds: {
    [feedLink: string]: INewsItem[]
  }
};

class Feeds extends React.Component<FeedsProps, FeedsState> implements IObserver {
  private emitter: IEventEmitter;

  constructor(props: FeedsProps) {
    super(props);
    this.state = {
      currentFeed: '',
      feeds: {},
    };
    this.emitter = props.rssEmitter;
  }

  getNewCurrentFeed(feeds: string[]):string {
    return feeds.length > 0 ? feeds[0] : '';
  }

  addFeed = (feed: string): void => {
    this.emitter.registerObserver(feed, this);
    this.setState((state) => ({
      currentFeed: feed,
      feeds: { ...state.feeds, [feed]: [] },
    }));
  };

  removeFeed = (feed: string) => () => {
    this.emitter.unregisterObserver(feed, this);
    this.setState((state) => {
      const newCurrentFeed = state.currentFeed === feed
        ? this.getNewCurrentFeed(Object.keys(state.feeds))
        : state.currentFeed;
      const filteredFeeds = Object.entries(state.feeds).filter(([currFeed]) => currFeed !== feed);

      return { currentFeed: newCurrentFeed, feeds: Object.fromEntries(filteredFeeds) };
    });
  };

  update(event: string, { title, link, date }: INewsItem): void {
    this.setState((state) => ({
      currentFeed: state.currentFeed,
      feeds: { ...state.feeds, [event]: [...state.feeds[event], { title, link, date }] },
    }));
  }

  render() {
    return (
      <>
        <AddFeed />
        <FeedsList />
        <FeedNewsList />
      </>
    );
  }
}

export default Feeds;
