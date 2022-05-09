import { IClock, IClockState } from './interfaces';

class Clock implements IClock, IClockState {
  clickMode() {}

  longClickMode() {}

  clickH() {}

  clickM() {}

  tick() {}

  isAlarmOn() {
    return false;
  }

  isAlarmTime() {
    return false;
  }

  minutes() {
    return '';
  }

  hours() {
    return '';
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
