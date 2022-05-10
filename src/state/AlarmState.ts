import { IClockState, IClock } from './interfaces';

class AlarmState implements IClockState {
  private readonly stateName = 'alarm';

  constructor(
    private clock: IClock,
  ) {
    this.clock = clock;
  }

  clickMode() {
    this.clock.changeState('clickMode');
  }

  clickH() {
    this.clock.increaseH('alarm');
  }

  clickM() {
    this.clock.increaseM('alarm');
  }

  tick() {}

  getCurrentMode(): 'alarm' {
    return this.stateName;
  }
}

export default AlarmState;
