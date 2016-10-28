$(document).ready(function() {
  Board.draw($('#board'), 3, 4);
  var coords = [ [2,2], [3,4] ];
  Board.placeUnitTo(2,2);
});
