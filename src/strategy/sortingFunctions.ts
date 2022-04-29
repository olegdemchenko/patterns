function bubbleSort(nums: number[]):number[] {
  if (nums.length === 0) {
    return [];
  }
  let exchanges = true;
  let iterationsCount = 0;
  const res = [...nums];
  while (exchanges && iterationsCount < nums.length) {
    exchanges = false;
    for (let j = 0; j < res.length - 1; j += 1) {
      if (res[j] > res[j + 1]) {
        const x = res[j];
        res[j] = res[j + 1];
        res[j + 1] = x;
        exchanges = true;
      }
    }
    iterationsCount += 1;
  }
  return res;
}

function mergeSort(nums: number[]):number[] {
  if (nums.length < 2) {
    return nums;
  }
  const midPosition = Math.round(nums.length / 2);
  const leftHalf = mergeSort(nums.slice(0, midPosition));
  const rightHalf = mergeSort(nums.slice(midPosition));
  let leftHalfIndex = 0;
  let rightHalfIndex = 0;
  const res: number[] = Array(nums.length);
  let resIndex = 0;
  while (leftHalfIndex < leftHalf.length && rightHalfIndex < rightHalf.length) {
    if (leftHalf[leftHalfIndex] < rightHalf[rightHalfIndex]) {
      res[resIndex] = leftHalf[leftHalfIndex];
      leftHalfIndex += 1;
    } else {
      res[resIndex] = rightHalf[rightHalfIndex];
      rightHalfIndex += 1;
    }
    resIndex += 1;
  }
  while (leftHalfIndex < leftHalf.length) {
    res[resIndex] = leftHalf[leftHalfIndex];
    leftHalfIndex += 1;
    resIndex += 1;
  }
  while (rightHalfIndex < rightHalf.length) {
    res[resIndex] = rightHalf[rightHalfIndex];
    rightHalfIndex += 1;
    resIndex += 1;
  }
  return res;
}

export { bubbleSort, mergeSort };
