import { ICustomSortArray, ISortAlg } from './interfaces';

class CustomSortArray extends Array implements ICustomSortArray {
  sortAlg: ISortAlg;

  setSortAlg(sortAlg: ISortAlg): void {
    this.sortAlg = sortAlg;
  }

  sortByCustomAlg(nums: number[]): ICustomSortArray {
    const sortedNums = this.sortAlg.sort(nums);
    return new CustomSortArray(...sortedNums);
  }
}

export default CustomSortArray;
