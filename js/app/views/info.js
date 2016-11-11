var Info = function($info, $secondary_info) {
  this.$info = $info;
  this.$secondary_info = $secondary_info;
  this.$info_template = $('#unit-info-template').html();
};

Info.prototype.display = function(unit, secondary) {
  if(_.isUndefined(unit)) { return }
  var $target = secondary ? this.$secondary_info : this.$info;
  $target.html(
      _.template(this.$info_template)({
        coordinates: unit,
        name: unit.name
      })
  );
  return unit;
};

Info.prototype.hide = function(secondary) {
  if (secondary) { $('#secondary_info').empty() }
};