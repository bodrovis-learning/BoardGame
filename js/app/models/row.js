var Row = function() {
  this.type = 'row';
};

Row.prototype = Object.create(BaseElement.prototype);

Row.prototype.place = function(cell) { // cell = new Cell()
  this.$el.append(cell.render()); // this.$el - compiled template, jQuery set
  return cell;
};