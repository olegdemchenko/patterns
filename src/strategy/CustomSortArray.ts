import { ICustomSortArray, ISortAlg } from './interfaces';

class CustomSortArray extends Array implements ICustomSortArray {
  sortAlg: ISortAlg;

  getAlgDescription(): string {
    return this.sortAlg.getDescription();
  }

  setSortAlg(sortAlg: ISortAlg): ICustomSortArray {
    this.sortAlg = sortAlg;
    return this;
  }

  sortByCustomAlg(): ICustomSortArray {
    const sortedNums = this.sortAlg.sort(this);
    return new CustomSortArray(...sortedNums);
  }
}

export default CustomSortArray;
