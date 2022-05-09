import { IClock, IClockState } from './interfaces';
import ClockState from './ClockState';

class Clock implements IClock, IClockState {
  private time: {
    hours: number;
    minutes: number;
  };

  private clockState: IClockState;

  private currentState: IClockState;

  constructor(hours: number, minutes: number) {
    this.time = {
      hours,
      minutes,
    };
    this.clockState = new ClockState(this);
    this.currentState = this.clockState;
    setInterval(() => {
      this.tick();
    }, 60000);
  }

  increaseM() {
    this.time.minutes = (this.time.minutes + 1) % 60;
  }

  increaseH() {
    this.time.hours = (this.time.hours + 1) % 24;
  }

  clickMode() {}

  longClickMode() {}

  clickH() {
    this.currentState.clickH();
  }

  clickM() {
    this.currentState.clickM();
  }

  tick() {
    if (this.minutes() === '59') {
      this.increaseH();
    }
    this.increaseM();
  }

  isAlarmOn() {
    return false;
  }

  isAlarmTime() {
    return false;
  }

  minutes() {
    const { minutes } = this.time;
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  hours() {
    const { hours } = this.time;
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  alarmMinutes() {
    return '';
  }

  alarmHours() {
    return '';
  }

  getCurrentMode() {
    return this.currentState.getCurrentMode();
  }
}

export default Clock;
