var BaseCollection = function(items) {
  this.items = _.isUndefined(items) ? [] : items;
};

BaseCollection.prototype.push = function(item) {
  return this.items.push(item);
};

BaseCollection.prototype.find_by_coords = function(x, y) {
  return _.find(this.items, function(item) {return item.x === x && item.y === y})
};

BaseCollection.prototype.find_by_el = function($el) {
  return _.find(this.items, function(item) { return item.$el.get(0) === $el.get(0) });
};