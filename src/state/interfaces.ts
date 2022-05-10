interface IClockState {
  clickMode(): void;
  clickH(): void;
  clickM(): void;
  tick(): void;
  getCurrentMode(): 'alarm' | 'clock' | 'bell';
}

interface IClock {
  increaseH(timeType: string): void;
  increaseM(timeType: string): void;
  longClickMode(): void;
  isAlarmOn(): boolean;
  isAlarmTime(): boolean;
  minutes(): string;
  hours(): string;
  alarmMinutes(): string;
  alarmHours(): string;
}

export { IClockState, IClock };
