import { NDArray } from '@scikit/types';

export class ndarray {
    private array: NDArray;

    private _dimension: number;
    private _shape: Array<number>;

    public constructor(nums: NDArray) {
        this.init(nums);
    }

    private getShape(nums: NDArray) {}

    private init(nums: NDArray) {
        this.array = nums;
    }
}
