describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles arrays of multiple items', function(){
    expect(bubbleSort([1,5,6,3,7,8,2,9,4])).toEqual([1,2,3,4,5,6,7,8,9])
  })
});


