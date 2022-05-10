import { IClockState, IClock } from './interfaces';

class BellState implements IClockState {
  private readonly stateName = 'bell';

  constructor(
    private clock: IClock,
  ) {
    this.clock = clock;
  }

  clickMode() {
    this.clock.changeState('clickMode');
  }

  clickH() {}

  clickM() {}

  tick() {
    this.clock.changeState('tick');
  }

  getCurrentMode(): 'bell' {
    return this.stateName;
  }
}

export default BellState;
