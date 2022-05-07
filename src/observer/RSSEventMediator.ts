import {
  IEventEmitter,
  IObserver,
  INewsItem,
  IFeedEmitter,
} from './interfaces';

class RSSEventMediator implements IEventEmitter {
  private CORSFreeAPI = 'https://api.codetabs.com/v1/proxy?quest=';

  private observers: {
    [event: string]: IObserver[]
  } = {};

  private feeder: IFeedEmitter;

  constructor(feeder: IFeedEmitter) {
    this.feeder = feeder;
  }

  registerObserver(event: string, observer: IObserver) {
    this.feeder.add({
      url: `${this.CORSFreeAPI}${event}`,
      refresh: 5000,
      eventName: event,
    });
    this.feeder.on(event, (item) => {
      this.notify(event, item);
    });
    if (!this.observers[event]) {
      this.observers[event] = [];
    }
    this.observers[event].push(observer);
  }

  unregisterObserver(event: string, observer: IObserver) {
    this.feeder.remove(event);
    this.observers[event] = this.observers[event]
      .filter((currObserver) => currObserver !== observer);
  }

  notify(event: string, data: INewsItem) {
    this.observers[event].forEach((observer) => observer.update(event, data));
  }
}

export default RSSEventMediator;
