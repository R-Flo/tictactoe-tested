import React from 'react'
import '../setUpTests';



function sum(a, b){
    return a + b;
}

describe('sum', function () {
    it('adds correctly', () => {
        expect(sum(1,2)).toEqual(3);
    });
});


function arrayify(input = []) {
    return Array.isArray(input) ? input : [input];
}

// arrayify() -> []
// arrayify('hello') -> ['hello']
// arrayify([1, 2, 3]) -> [1, 2, 3]

describe('arrayify', () => {
    it('returns an empty array when given nothing', () => {
        const result = arrayify();
        expect(result).toEqual([]);
    });

    it('returns the array-ed version of what it is given', () => {
        const input = 'hi there';
        const result = arrayify(input);
        expect(result).toEqual([input]);
    });

    it('returns the array if it is given an array', () => {
        const input = [1, 2, 3];
        const result = arrayify(input);
        expect(result).toEqual(input);
    });
});
