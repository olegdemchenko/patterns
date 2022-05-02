import ImmutableSortFunc from './commonTypes';

interface ISortAlg {
  readonly description: string;
  readonly sortAlg: ImmutableSortFunc;
  new (sortAlg: ImmutableSortFunc, desciprtion: string): ISortAlg;
  sort(nums: number[]): number[];
}

export default ISortAlg;
