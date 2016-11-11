var Units = function(items) {
  // this = this class, Units
  BaseCollection.call(this, items); // (context, arg1, arg2, arg3...)
  // BaseCollection.apply(Units, [1,2,3]) --> (Units,1,2,3)
};

Units.prototype = Object.create(BaseCollection.prototype);