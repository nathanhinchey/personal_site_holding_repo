var sum = function () {
  var sum = 0;

  for (var i = 0; i < arguments.length; ++i ) {
    sum += arguments[i];
  }

  return sum;
};

Function.prototype.myBind = function(obj) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);

  return function() {
    return fn.apply(obj, args);
  };
};

var curriedSum = function(numArgs) {

  var numbers = [];

  var sum = function () {
    var sum = 0;

    for (var i = 0; i < arguments[0].length; ++i ) {
      sum += arguments[0][i];
    }

    return sum;
  };

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(numbers);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
};
