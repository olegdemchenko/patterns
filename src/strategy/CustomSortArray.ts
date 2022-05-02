import { ICustomSortArray, ISortAlg } from './interfaces';

class CustomSortArray extends Array implements ICustomSortArray {
  sortAlg: ISortAlg;

  setSortAlg(sortAlg: ISortAlg): ICustomSortArray {
    this.sortAlg = sortAlg;
    return this;
  }

  sortByCustomAlg(nums: number[]): ICustomSortArray {
    const sortedNums = this.sortAlg.sort(nums);
    return new CustomSortArray(...sortedNums);
  }
}

export default CustomSortArray;
