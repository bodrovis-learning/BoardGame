var Board = {
  draw: function($el, rows, cols) {
    _(rows).times(function(i) {
      var row = $('<div class="row"/>');

      _(cols).times(function(j) {
        row.append( $('<div class="cell"/>') );
      });

      $el.append(row);
    });
  },
  placeUnitTo: function(x, y) {
    $('.row').eq(y - 1).find('.cell').eq(x - 1).append('<div class="unit"/>');
  }
};