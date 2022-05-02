import ImmutableSortFunc from './commonTypes';

interface ISortAlg {
  readonly description: string;
  readonly sortAlg: ImmutableSortFunc;
  new (sortAlg: ImmutableSortFunc, desciprtion: string): ISortAlg;
  sort(nums: number[]): number[];
}

interface ICustomSortArray {
  readonly sortAlg: ISortAlg
  setSortAlg(sortAlg: ISortAlg): ICustomSortArray;
  sortByCustomAlg(nums: number[]): ICustomSortArray;
}

export { ISortAlg, ICustomSortArray };
