var _ = require('lodash');

var Board = function (size){
  this.dots = {};
  this.edges = {};
  this.blocks = {};
  this.size = size;
}

Board.prototype = {
  makeDots : function() {
    for (var row = 1; row <= this.size; row++) {
      for (var column = 1; column <= this.size; column++) {
        if(column == this.size && this.size == row)
          this.dots[row+''+column] = [];
        else if(column == this.size)
          this.dots[row+''+column] = [(row+1)+""+column];
        else if(row == this.size)
          this.dots[row+''+column] = [row+""+(column+1)];
        else
          this.dots[row+''+column] = [(row+1)+""+column,row+""+(column+1)];
      };
    };
  }
};

var visualizeBoard = function(board){
  var all_dots = Object.keys(board.dots);
  return _.chunk(all_dots,board.size);
};

var my_board = new Board(9);
my_board.makeDots();
module.exports = Board;
