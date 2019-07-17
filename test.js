const expect = require('chai').expect;
const request = require('supertest');
// const mocha = require('mocha');
//const sort = require('./index.js');
const app = require('./app.js');
// describe('sort function', () => {
//   console.log('the descrive function ran');
//   it('This should sort an array in ascending order', () => {
//     // expect(sort([2,5,3,4,1])).to.deep.equal([1,2,3,4,5]);
//     expect(sort([4,3,1,2,5])).to.deep.equal([1,2,3,4,5]);
//     expect(sort([13,25,11,67,8])).to.deep.equal([8,11,13,25,67]);
//   });
// });

describe('GET /frequency endpoint', () =>{
  it('this should be a string count',() =>{
    const s = 
      'aaBBAAbbaa';
    

    const expected ={
      'a': 6,
      'b':4,
      unique: 2,
      average: 5,
      highest: 'a',
     
    };
   
    return request(app)
    
      .get(`/frequency?s=${s}`)
      //.query()
      
      .expect(200)
      
      .expect(res =>{
        console.log(res.body);
        expect(res.body).to.deep.eql(expected);
        
      });
      
  });
});