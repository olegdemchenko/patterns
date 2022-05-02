interface ISortAlg {
  sort(nums: number[]): number[];
}

interface ICustomSortArray {
  setSortAlg(sortAlg: ISortAlg): ICustomSortArray;
  sortByCustomAlg(): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
