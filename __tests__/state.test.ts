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
  jest.advanceTimersByTime(60000);
  expect(clock.minutes()).toBe('01');
  expect(clock.hours()).toBe('00');
  jest.advanceTimersByTime(3600000);
  expect(clock.minutes()).toBe('01');
  expect(clock.hours()).toBe('01');
});
