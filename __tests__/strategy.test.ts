import { bubbleSort, mergeSort, quickSort } from '../src/strategy/sortingFunctions';

const unsortedNumbers = [54, 26, 93, 17, 77, 31, 44, 55, 20, -2, -5, 0, 77, 93, 26, 77];

let sortedNumbers: number[];

beforeAll(() => {
  sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
});

test('check bubble sort algorithm', () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort(unsortedNumbers)).toEqual(sortedNumbers);
});

test('check merge sort algorithm', () => {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort(unsortedNumbers)).toEqual(sortedNumbers);
});

test('check quick sort algorithm', () => {
  expect(quickSort([])).toEqual([]);
  expect(quickSort(unsortedNumbers)).toEqual(sortedNumbers);
});
