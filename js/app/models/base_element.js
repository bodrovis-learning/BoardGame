var BaseElement = function() {
};

BaseElement.prototype.render = function() {
  var template = $('#' + this.type + '-template').html();
  var compiled = _.template( template )(); // html markup
  this.$el = $( compiled ); // jquery set
  //this.$el = $( _.template( $('#' + this.type + '-template').html() )() );
  return this.$el;
};