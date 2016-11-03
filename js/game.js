$(document).ready(function() {
  var board = new Board($('#board'));
  board.draw(3, 4);
  var coords = [ [2,2], [3,2], [2,2] ];

  _.each(coords, function(pair) { // pair = [2,2]
    //board.placeUnitTo(pair[0], pair[1]);
    board.placeUnitTo.apply(board, pair);
  });
});