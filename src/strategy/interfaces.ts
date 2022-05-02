interface ISortAlg {
  sort(nums: number[]): number[];
}

interface ICustomSortArray {
  setSortAlg(sortAlg: ISortAlg): ICustomSortArray;
  sortByCustomAlg(nums: number[]): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
