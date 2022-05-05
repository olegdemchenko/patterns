interface INewsItem {
  title: string;
  link: string;
  date: Date;
}

interface IObserver {
  update: (data: INewsItem) => void;
}

interface IEventEmitter {
  registerObserver: (event: string, observer: IObserver) => void;
  unregisterObserver: (event:string, observer: IObserver) => void;
  notify: (event: string, data: INewsItem) => void;
}

export { IObserver, IEventEmitter, INewsItem };
