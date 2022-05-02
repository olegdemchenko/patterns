interface ISortAlg {
  sort(nums: number[]): number[];
}

interface ICustomSortArray {
  readonly sortAlg: ISortAlg
  setSortAlg(sortAlg: ISortAlg): ICustomSortArray;
  sortByCustomAlg(nums: number[]): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
