var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('the output of 5! is equal to 120',()=>{

//steup
const expected = 120
//exercise

const actual = Calculate.factorial(5)
//verify
assert.equal(actual,expected)
})
it("returns 1 when you pass in 0.",()=>{

//steup
const expected = 1
//exercise
const actual = Calculate.factorial(0)
//verify
assert.equal(actual,expected)
  
})
  });
});