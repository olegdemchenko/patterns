import { bubbleSort, immutableMergeSort, immutableQuickSort } from '../src/strategy/sortingFunctions';

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
  expect(immutableMergeSort([])).toEqual([]);
  expect(immutableMergeSort(unsortedNumbers)).toEqual(sortedNumbers);
});

test('check quick sort algorithm', () => {
  expect(immutableQuickSort([])).toEqual([]);
  expect(immutableQuickSort(unsortedNumbers)).toEqual(sortedNumbers);
});
