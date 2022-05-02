import { immutableBubbleSort, immutableMergeSort, immutableQuickSort } from '../src/strategy/sortingFunctions';
import CustomSortArray from '../src/strategy/CustomSortArray';
import SortAlg from '../src/strategy/SortAlg';

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

test('check CustomSortArray implementation', () => {
  const customData = new CustomSortArray(...unsortedNumbers);
  const bubbleSortDesciption = 'Bubble sort';
  const mergeSortDescription = 'Merge sort';
  const quickSortDescription = 'Quick sort';
  customData.setSortAlg(new SortAlg(immutableBubbleSort, bubbleSortDesciption));
  expect(customData.sortByCustomAlg()).toEqual(sortedNumbers);
  expect(customData.getAlgDescription()).toBe(bubbleSortDesciption);
  customData.setSortAlg(new SortAlg(immutableMergeSort, mergeSortDescription));
  expect(customData.sortByCustomAlg()).toEqual(sortedNumbers);
  expect(customData.getAlgDescription()).toBe(mergeSortDescription);
  customData.setSortAlg(new SortAlg(immutableQuickSort, quickSortDescription));
  expect(customData.sortByCustomAlg()).toEqual(sortedNumbers);
  expect(customData.getAlgDescription()).toBe(quickSortDescription);
});
