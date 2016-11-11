$(document).ready(function() {
  var board = new Board($('#board'));
  var units = [ ['first unit', 2, 2], ['second unit', 3, 2] ];

  board.draw(3, 4);
  board.placeUnits(units);
  board.startGame();
});