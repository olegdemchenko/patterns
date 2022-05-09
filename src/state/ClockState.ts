import { IClockState, IClock } from './interfaces';

class ClockState implements IClockState {
  constructor(
    private clock: IClock,
  ) {
    this.clock = clock;
  }

  clickMode() {}

  clickH() {
    this.clock.increaseH();
  }

  clickM() {
    this.clock.increaseM();
  }

  tick() {}

  getCurrentMode(): 'clock' {
    return 'clock';
  }
}

export default ClockState;
