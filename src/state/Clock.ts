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

  increaseM(timeType: string) {
    const timeState = timeType === 'alarm' ? 'alarmTime' : 'time';
    this[timeState].minutes = (this[timeState].minutes + 1) % 60;
  }

  increaseH(timeType: string) {
    const timeState = timeType === 'alarm' ? 'alarmTime' : 'time';
    this[timeState].hours = (this[timeState].hours + 1) % 24;
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
      this.increaseH('time');
    }
    this.increaseM('time');
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
