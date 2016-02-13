var chai = require('chai');
var assert = chai.assert;
var Board = require('../lib/gameBoard.js');

describe("makeDots",function(){
  it("should create dots on an existing board",function(){
    var board = new Board(9);
    board.makeDots();
    assert.equal(Object.keys(board.dots).length,81);
  })
})
