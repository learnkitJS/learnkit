import { ArrayShape, NumArray } from '@learnkit/types';

export class NDArray {
    private _arr: NumArray;

    private _dimension: number;
    private _shape: ArrayShape;

    public constructor(nums: NumArray) {
        this.init(nums);
    }

    public static zeros(shape: ArrayShape): NDArray {
        return new NDArray([]);
    }

    public static ones(shape: ArrayShape): NDArray {
        return new NDArray([]);
    }

    private getShape(nums: NumArray) {}

    public get shape(): ArrayShape {
        return this._shape;
    }

    public get dimension(): number {
        return this._dimension;
    }

    public get data(): NumArray {
        return this._arr;
    }

    public toString(): string {
        return JSON.stringify(this._arr);
    }

    private init(nums: NumArray) {
        this._arr = nums;
    }

    public add(arr: NDArray): NDArray {
        return new NDArray(this._arr);
    }

    public sub(arr: NDArray): NDArray {
        return new NDArray(this._arr);
    }

    public dot(arr: NDArray): NDArray {
        return new NDArray(this._arr);
    }

    public prod(arr: NDArray): NDArray {
        return new NDArray(this._arr);
    }

    public star(arr: NDArray): NDArray {
        return new NDArray(this._arr);
    }

    public sum(): number {
        return 0;
    }

    public max(): number {
        return 0;
    }

    public min(): number {
        return 0;
    }

    public reShape(): void {}

    public resize(): void {}

    public flatten(): void {}

    public ravel(): void {}

    public squeeze(): void {}
}
