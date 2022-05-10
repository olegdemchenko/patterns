import Clock from '../src/state/Clock';

let clock: Clock;

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  clock = new Clock(0, 0);
});

test('check time changing in clock state', () => {
  expect(clock.getCurrentMode()).toBe('clock');
  expect(clock.minutes()).toBe('00');
  expect(clock.hours()).toBe('00');
  jest.advanceTimersByTime(60 * 1000);
  expect(clock.minutes()).toBe('01');
  expect(clock.hours()).toBe('00');
  jest.advanceTimersByTime(60 * 60 * 1000);
  expect(clock.minutes()).toBe('01');
  expect(clock.hours()).toBe('01');
  jest.advanceTimersByTime(24 * 60 * 60 * 1000);
  expect(clock.minutes()).toBe('01');
  expect(clock.hours()).toBe('01');
});

test('check clock state behavior', () => {
  expect(clock.getCurrentMode()).toBe('clock');
  clock.clickH();
  clock.clickH();
  clock.clickM();
  clock.clickM();
  expect(clock.hours()).toBe('02');
  expect(clock.minutes()).toBe('02');
  jest.advanceTimersByTime(61 * 60 * 1000);
  expect(clock.hours()).toBe('03');
  expect(clock.minutes()).toBe('03');
});

test('check alarm state behavior', () => {
  expect(clock.getCurrentMode()).toBe('clock');
  clock.clickMode();
  expect(clock.getCurrentMode()).toBe('alarm');
  clock.clickH();
  clock.clickM();
  clock.clickMode();
  expect(clock.getCurrentMode()).toBe('clock');
  expect(clock.alarmHours()).toBe('01');
  expect(clock.alarmMinutes()).toBe('01');
});

test('check bell state behavior', () => {
  expect(clock.getCurrentMode()).toBe('clock');
  clock.clickMode();
  expect(clock.getCurrentMode()).toBe('alarm');
  clock.clickH();
  clock.clickM();
  clock.clickMode();
  clock.longClickMode();
  expect(clock.getCurrentMode()).toBe('clock');
  jest.advanceTimersByTime(61 * 60 * 1000);
  expect(clock.getCurrentMode()).toBe('bell');
  clock.clickMode();
  expect(clock.getCurrentMode()).toBe('clock');
});
