interface INewsItem {
  title: string;
  link: string;
  date: Date;
}

interface IObserver {
  update: (data: INewsItem) => void;
}

interface IEventEmitter {
  registerObserver: (observer: IObserver) => void;
  unregisterObserver: (observer: IObserver) => void;
  notify: (data: INewsItem) => void;
}

export { IObserver, IEventEmitter, INewsItem };
