const expect = require('chai').expect;
// const mocha = require('mocha');
const sort = require('./index.js');

describe('sort function', () => {
  console.log('the descrive function ran');
  it('This should sort an array in ascending order', () => {
    // expect(sort([2,5,3,4,1])).to.deep.equal([1,2,3,4,5]);
    expect(sort([4,3,1,2,5])).to.deep.equal([1,2,3,4,5]);
    expect(sort([13,25,11,67,8])).to.deep.equal([8,11,13,25,67]);
  });
});

