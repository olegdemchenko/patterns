interface ISortAlg {
  sort(nums: number[]): number[];
}

interface ICustomSortArray {
  setSortAlg(sortAlg: ISortAlg): void;
  sortByCustomAlg(nums: number[]): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
