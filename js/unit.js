var Unit = function(x, y) {
  this.x = x;
  this.y = y;
};

Unit.prototype.select = function() {
  this.$el.addClass('selected');
};

Unit.prototype.deselect = function() {
  this.$el.removeClass('selected');
};