import { IClockState, IClock } from './interfaces';

class ClockState implements IClockState {
  private readonly stateName = 'clock';

  constructor(
    private clock: IClock,
  ) {
    this.clock = clock;
  }

  clickMode() {
    this.clock.changeState('clickMode');
  }

  clickH() {
    this.clock.increaseH('time');
  }

  clickM() {
    this.clock.increaseM('time');
  }

  tick() {
    if (this.clock.isAlarmTime()) {
      this.clock.changeState('tick');
    }
  }

  getCurrentMode(): 'clock' {
    return this.stateName;
  }
}

export default ClockState;
