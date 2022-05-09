import { IClock, IClockState } from './interfaces';

class Clock implements IClock, IClockState {
  private time: {
    hours: number;
    minutes: number;
  };

  constructor(hours: number, minutes: number) {
    this.time = {
      hours,
      minutes,
    };
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

  clickH() {}

  clickM() {}

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

  getCurrentMode(): 'clock' {
    return 'clock';
  }
}

export default Clock;
