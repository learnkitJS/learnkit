import { NumArray, ArrayShape } from '@learnkit/types';
import { NDArray } from './array/ndarray';

function array(nums: NumArray): NDArray {
    return new NDArray(nums);
}

function zeros(shape: ArrayShape): NDArray {
    return NDArray.zeros(shape);
}

function zerosLike(arr: NDArray): NDArray {
    const shape = arr.shape;
    return NDArray.zeros(shape);
}

function ones(shape: ArrayShape): NDArray {
    return NDArray.ones(shape);
}

function onesLike(arr: NDArray): NDArray {
    const shape = arr.shape;
    return NDArray.ones(shape);
}

function arange(start: number, end: number, step: number): NDArray {
    const nums: Array<number> = [];
    for (let i = start; i < end; i += step) {
        nums.push(i);
    }
    return new NDArray(nums);
}

function reShape(shape: ArrayShape): NDArray {
    return ones(shape);
}

export const Maths = {
    array,
    zeros,
    zerosLike,
    ones,
    onesLike,
    arange,
    reShape,
};
