import ImmutableSortFunc from './commonTypes';

/* eslint-disable no-param-reassign */
function bubbleSort(nums: number[]):void {
  if (nums.length > 1) {
    let exchanges = true;
    let iterationsCount = 0;
    while (exchanges && iterationsCount < nums.length) {
      exchanges = false;
      for (let j = 0; j < nums.length - 1; j += 1) {
        if (nums[j] > nums[j + 1]) {
          const x = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = x;
          exchanges = true;
        }
      }
      iterationsCount += 1;
    }
  }
}

function mergeSort(nums: number[]):void {
  if (nums.length > 1) {
    const midPosition = Math.round(nums.length / 2);
    const leftHalf = nums.slice(0, midPosition);
    const rightHalf = nums.slice(midPosition);
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    let leftHalfIndex = 0;
    let rightHalfIndex = 0;
    let resIndex = 0;
    while (leftHalfIndex < leftHalf.length && rightHalfIndex < rightHalf.length) {
      if (leftHalf[leftHalfIndex] < rightHalf[rightHalfIndex]) {
        nums[resIndex] = leftHalf[leftHalfIndex];
        leftHalfIndex += 1;
      } else {
        nums[resIndex] = rightHalf[rightHalfIndex];
        rightHalfIndex += 1;
      }
      resIndex += 1;
    }
    while (leftHalfIndex < leftHalf.length) {
      nums[resIndex] = leftHalf[leftHalfIndex];
      leftHalfIndex += 1;
      resIndex += 1;
    }
    while (rightHalfIndex < rightHalf.length) {
      nums[resIndex] = rightHalf[rightHalfIndex];
      rightHalfIndex += 1;
      resIndex += 1;
    }
  }
}

function part(nums: number[], first = 0, last = nums.length - 1):number {
  const pivotValue = nums[first];
  let i = first + 1;
  let j = last;
  let done = false;
  while (!done) {
    while (i <= j && nums[i] <= pivotValue) {
      i += 1;
    }
    while (j >= i && nums[j] >= pivotValue) {
      j -= 1;
    }
    if (i > j) {
      done = true;
    } else {
      const x = nums[i];
      nums[i] = nums[j];
      nums[j] = x;
      i += 1;
      j -= 1;
    }
  }
  nums[first] = nums[j];
  nums[j] = pivotValue;
  return j;
}
/* eslint-enable no-param-reassign */

function quickSort(nums: number[], l = 0, r = nums.length - 1):void {
  if (l < r) {
    const splitPoint = part(nums, l, r);
    quickSort(nums, l, splitPoint - 1);
    quickSort(nums, splitPoint + 1, r);
  }
}

function makeImmutable(
  sortFunc: (nums: number[], left: number, right: number) => void,
): ImmutableSortFunc {
  return function (nums: number[]): number[] {
    const numsCopy = [...nums];
    sortFunc(numsCopy, 0, numsCopy.length - 1);
    return numsCopy;
  };
}

const immutableBubbleSort = makeImmutable(bubbleSort);
const immutableMergeSort = makeImmutable(mergeSort);
const immutableQuickSort = makeImmutable(quickSort);

export { immutableBubbleSort, immutableMergeSort, immutableQuickSort };
