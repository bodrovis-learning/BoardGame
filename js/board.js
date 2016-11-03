var Board = function(el) {
  this.$el = el;
  this.units = [];
  this.cells = [];

  var that = this;
  this.$el.on('click', '.unit', function(e) {
    e.stopPropagation();
    that.selectUnit( $(this) ); // this = html
  });
  this.$el.on('click', '.cell', function() {
    that.moveUnitTo();
  });
};

Board.prototype.draw = function (rows, cols) {
  var that = this;
  _(rows).times(function (x) {
    var row = $('<div class="row"/>');

    _(cols).times(function (y) {
      var cell = new Cell(x + 1, y + 1);
      cell.$el = $('<div class="cell"/>');
      row.append(cell.$el);
      that.cells.push(cell);
    });

    that.$el.append(row);
  });
};

Board.prototype.placeUnitTo = function(x, y) {
  if(!_.find( this.units, function(unit) { return unit.x === x && unit.y === y }) ) {
    var unit = new Unit(x, y);
    var unit_el = $('<div class="unit"/>');
    this.$el.find('.row').eq(y - 1).find('.cell').eq(x - 1).append(unit_el);
    unit.$el = unit_el;
    this.units.push(unit);
  }
};

Board.prototype.selectUnit = function(el) {
  var newly_selected = _.find(this.units, function(unit) { return unit.$el.get(0) === el.get(0) });

  if( newly_selected !== this.selected) {
    if(!_.isUndefined(this.selected)) { this.selected.deselect() }

    this.selected = newly_selected;
    this.selected.select();
  }
};

Board.prototype.moveUnitTo = function() {
  if(_.isUndefined(this.selected)) {
    console.error('No unit is selected!');
    return;
  }
  console.log('other code...');
};