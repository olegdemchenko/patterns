interface IClockState {
  clickMode(): void;
  longClickMode(): void;
  clickH(): void;
  clickM(): void;
  tick(): void;
  getCurrentMode(): 'alarm' | 'clock' | 'bell';
}

interface IClock {
  isAlarmOn(): boolean;
  isAlarmTime(): boolean;
  minutes(): string;
  hours(): string;
  alarmMinutes(): string;
  alarmHours(): string;
}

export { IClockState, IClock };
