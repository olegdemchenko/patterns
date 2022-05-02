import ImmutableSortFunc from './commonTypes';
import { ISortAlg } from './interfaces';

class SortAlg implements ISortAlg {
  private sortFunc: ImmutableSortFunc;

  private description: string;

  constructor(sortFunc: ImmutableSortFunc, description: string) {
    this.sortFunc = sortFunc;
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  sort(nums: number[]):number[] {
    return this.sortFunc(nums);
  }
}

export default SortAlg;
