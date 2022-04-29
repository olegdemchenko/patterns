import { immutableBubbleSort, immutableMergeSort, immutableQuickSort } from '../src/strategy/sortingFunctions';

let unsortedNumbers: number[];
let sortedNumbers: number[];

beforeEach(() => {
  unsortedNumbers = Array(1000).fill(0).map(() => Math.random() * 1000 - Math.random() * 1000);
  sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
});

test('check bubble sort algorithm', () => {
  expect(immutableBubbleSort([])).toEqual([]);
  expect(immutableBubbleSort(unsortedNumbers)).toEqual(sortedNumbers);
});

test('check merge sort algorithm', () => {
  expect(immutableMergeSort([])).toEqual([]);
  expect(immutableMergeSort(unsortedNumbers)).toEqual(sortedNumbers);
});

test('check quick sort algorithm', () => {
  expect(immutableQuickSort([])).toEqual([]);
  expect(immutableQuickSort(unsortedNumbers)).toEqual(sortedNumbers);
});
