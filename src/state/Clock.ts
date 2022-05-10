import { IClock, IClockState } from './interfaces';
import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

type Time = {
  hours: number;
  minutes: number;
};

class Clock implements IClock, IClockState {
  private time: Time;

  private alarmTime: Time;

  private clockState: IClockState;

  private alarmState: IClockState;

  private bellState: IClockState;

  private currentState: IClockState;

  private isAlarmActive: boolean;

  constructor(hours: number, minutes: number) {
    this.time = {
      hours,
      minutes,
    };
    this.alarmTime = {
      hours: 0,
      minutes: 0,
    };
    this.clockState = new ClockState(this);
    this.alarmState = new AlarmState(this);
    this.bellState = new BellState(this);
    this.isAlarmActive = false;
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

  clickMode() {
    this.currentState.clickMode();
  }

  longClickMode() {
    this.isAlarmActive = true;
  }

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
    this.currentState.tick();
  }

  changeState(event: string) {
    const clickModePaths = {
      alarm: this.clockState,
      clock: this.alarmState,
      bell: this.clockState,
    };
    const tickPaths = {
      bell: this.clockState,
      clock: this.bellState,
      alarm: this.alarmState,
    };
    const currentState = this.getCurrentMode();
    const nextState = event === 'clickMode' ? clickModePaths[currentState] : tickPaths[currentState];
    this.currentState = nextState;
  }

  isAlarmOn() {
    return this.isAlarmActive;
  }

  isAlarmTime() {
    const isAlarmTime = this.isAlarmOn()
      && this.time.hours === this.alarmTime.hours
      && this.time.minutes === this.alarmTime.minutes;
    return isAlarmTime;
  }

  minutes() {
    const { minutes } = this.time;
    return this.stringifyTime(minutes);
  }

  hours() {
    const { hours } = this.time;
    return this.stringifyTime(hours);
  }

  stringifyTime(time: number) {
    return time < 10 ? `0${time}` : `${time}`;
  }

  alarmMinutes() {
    const { minutes } = this.alarmTime;
    return this.stringifyTime(minutes);
  }

  alarmHours() {
    const { hours } = this.alarmTime;
    return this.stringifyTime(hours);
  }

  getCurrentMode() {
    return this.currentState.getCurrentMode();
  }
}

export default Clock;
