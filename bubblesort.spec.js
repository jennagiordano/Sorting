describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(sorter, 'swap').and.callThrough()
  })
  it('handles an empty array', function(){
    expect( sorter.bubbleSort([]) ).toEqual( [] );
  });
  it('handles arrays of multiple items', function(){
    expect(sorter.bubbleSort([1,5,6,3,7,8,2,9,4])).toEqual([1,2,3,4,5,6,7,8,9]),
  });
  it('should call swap for each element * array.length', function () {
    console.log('this >> ', this)
   sorter.bubbleSort([1,5,6,3,7,8,2,9,4])
    expect(sorter.swap.calls.count()).toEqual(24)
  })
});


