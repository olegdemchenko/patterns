interface INewsItem {
  title: string;
  link: string;
  date: Date;
}

interface IObserver {
  update: (event: string, data: INewsItem) => void;
}

interface IEventEmitter {
  registerObserver: (event: string, observer: IObserver) => void;
  unregisterObserver: (event:string, observer: IObserver) => void;
  notify: (event: string, data: INewsItem) => void;
}

interface IFeedEmitter {
  add: (feed: { url: string, refresh: number, eventName?: string }) => void;
  remove: (feed: string) => void;
  on: (eventName: string, callback: (item: INewsItem) => void) => void;
  removeAllListeners: (event: string) => void;
}

export {
  IObserver,
  IEventEmitter,
  INewsItem,
  IFeedEmitter,
};
