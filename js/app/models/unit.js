var Unit = function(name) {
  this.name = name;
  this.type = 'unit';
  var _that = this;

  var _getCoord = function(coord) {
    if(!_.isUndefined(_that.cell)) { return _that.cell[coord] }
  };

  Object.defineProperty(this, "x", {
    get: function() { return _getCoord('x') }
  });

  Object.defineProperty(this, "y", {
    get: function() { return _getCoord('y') }
  });
};

Unit.prototype = Object.create(BaseElement.prototype);

Unit.prototype.select = function() {
  this.$el.addClass('selected');
  return this;
};

Unit.prototype.deselect = function() {
  this.$el.removeClass('selected');
};

Unit.prototype.toString = function() {
  return this.x + ", " + this.y
};