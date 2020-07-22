describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([2, 3, 7, 8, 5, 1, 4, 6, 9])).toEqual([
      [2, 3, 7, 8],
      [5, 1, 4, 6, 9],
    ]);
    expect(split([2, 3])).toEqual([[2], [3]]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([2, 3, 7, 8], [1, 4, 5, 6, 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(merge([2, 4], [1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([2, 4], [1, 3])).toEqual([1, 2, 3, 4]);
  });
});
