import server from '../src/mocks/server';
import fetchAdapter from '../src/adapter/fetchAdapter';
import paths from '../src/mocks/paths';
import {
  lorem,
  validUserId,
  userData,
} from '../src/mocks/mockData';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test('test fetchAdapter get request', async () => {
  const response = await fetchAdapter(paths.fetchAdapter.lorem);
  expect(response.status).toBe(200);
  expect(response.ok).toBeTruthy();
  const result = await response.text();
  expect(result).toBe(lorem);
});

test('test fetchAdapter post request', async () => {
  const response = await fetchAdapter(paths.fetchAdapter.userData, {
    method: 'POST',
    body: validUserId,
  });
  expect(response.status).toBe(200);
  expect(response.ok).toBeTruthy();
  const result = await response.json();
  expect(result).toEqual(userData);
});

test('test fetchAdapter post error request', async () => {
  expect(async () => {
    await fetchAdapter(paths.fetchAdapter.userData, {
      method: 'POST',
      body: '',
    });
  }).toThrow();
});
