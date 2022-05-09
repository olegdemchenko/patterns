interface IClockState {
  clickMode(): void;
  longClickMode(): void;
  clickH(): void;
  clickM(): void;
  tick(): void;
  isAlarmOn(): boolean;
  isAlarmTime() :boolean;
  minutes(): string;
  hours(): string;
  alarmMinutes(): string;
  alarmHours(): string;
  getCurrentMode(): 'alarm' | 'clock' | 'bell';
}

export default IClockState;
