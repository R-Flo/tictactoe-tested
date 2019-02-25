import React from 'react'
import '../setUpTests';

test("returns undefined by default", () => {
    const mock = jest.fn();

    let result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
});

const doAdd = (a, b, callback) => {
    let add = a + b + 3;
    callback(add);
};

test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(6);
});
