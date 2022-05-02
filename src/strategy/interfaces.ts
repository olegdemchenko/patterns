interface ISortAlg {
  sort(nums: number[]): number[];
  getDescription(): string;
}

interface ICustomSortArray {
  getAlgDescription(): string;
  setSortAlg(sortAlg: ISortAlg): ICustomSortArray;
  sortByCustomAlg(): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
