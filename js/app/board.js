var Board = function($el) {
  this.$el = $el;
  this.units = new Units();
  this.cells = new Cells();
};

Board.prototype.draw = function (rows, cols) {
  var that = this;
  _(rows).times(function (y) {
    var row = new Row();
    row.render();

    _(cols).times(function (x) {
      var cell = new Cell(x + 1, y + 1);
      that.cells.push(row.place(cell));
    });

    that.$el.append(row.$el);
  });
};

Board.prototype.placeUnits = function(units) {
  var _that = this;
  _.each(units, function (unit) {
    _that.placeUnitTo(unit[0], unit[1], unit[2]); // name, x, y
  });
};

Board.prototype.placeUnitTo = function(name, x, y) {
  var cell = this.cells.find_by_coords(x, y);
  if(cell.isOccupied()) { return }
  this.units.push(cell.place(new Unit(name)));
};

Board.prototype.selectUnit = function($unit) {
  var newly_selected = this.units.find_by_el($unit);

  if( newly_selected === this.selected) { return }
  if(this.isUnitSelected()) { this.selected = this.selected.deselect() }

  this.selected = newly_selected.select();
  return this.selected;
};

Board.prototype.isUnitSelected = function() {
  return !_.isUndefined(this.selected)
};

Board.prototype.moveUnitTo = function($cell) {
  if(!this.isUnitSelected()) {
    console.error('No unit is selected!');
    return;
  }

  var target = this.cells.find_by_el($cell);
  if(target.isOccupied()) {
    console.error('This cell is occupied!');
    return;
  }

  target.move(this.selected);
  return this.selected;
};

Board.prototype.startGame = function() {
  var _info = new Info($('#info'), $('#secondary_info'));
  var board = this;

  board.$el.on('click', '.unit', function (e) {
    e.stopPropagation();
    _info.display(board.selectUnit($(this)));
  });

  board.$el.on('mouseenter', '.unit', function (e) {
    e.stopPropagation();
    _info.display(board.units.find_by_el($(this)), true);
  }).on('mouseleave', '.unit', function (e) {
    e.stopPropagation();
    _info.hide(true);
  });

  board.$el.on('click', '.cell', function () {
    _info.display(board.moveUnitTo($(this)));
  });
};