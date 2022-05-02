import ImmutableSortFunc from './commonTypes';
import { ISortAlg } from './interfaces';

class SortAlg implements ISortAlg {
  readonly sortFunc: ImmutableSortFunc;

  readonly description: string;

  constructor(sortFunc: ImmutableSortFunc, desciprtion: string) {
    this.sortFunc = sortFunc;
    this.description = desciprtion;
  }

  getDescription(): string {
    return this.description;
  }

  sort(nums: number[]):number[] {
    return this.sortFunc(nums);
  }
}

export default SortAlg;
