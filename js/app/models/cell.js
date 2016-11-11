var Cell = function(x, y) {
  var _x = x;
  var _y = y;
  this.type = 'cell';

  Object.defineProperty(this, "x", {
    get: function() { return _x }
  });

  Object.defineProperty(this, "y", {
    get: function() { return _y }
  });
};

Cell.prototype = Object.create(BaseElement.prototype);

Cell.prototype.link = function(unit) {
  this.unit = unit;
  unit.cell = this;
};

Cell.prototype.unlink = function() {
  delete this.unit.cell;
  delete this.unit;
};

Cell.prototype.place = function(unit) {
  this.link(unit);
  this.$el.append(unit.render());
  return unit;
};

Cell.prototype.move = function(unit) {
  var that = this;
  unit.cell.unlink();
  unit.$el.hide(300, function() {
    $(this).detach().appendTo(that.$el).show(300);
  });
  this.link(unit);
  return unit;
};

Cell.prototype.isOccupied = function() {
  return !_.isUndefined(this.unit);
};