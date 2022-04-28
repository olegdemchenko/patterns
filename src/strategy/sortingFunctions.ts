function bubbleSort(nums: number[] | []) {
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

export { bubbleSort };
