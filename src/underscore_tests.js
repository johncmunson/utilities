/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if (!Boolean(n)) {
        return array[0];
    }
    if (n >= array.length) {
        return array;
    } else {
        return array.slice(0, n);
    }
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (!Boolean(n)) {
        return array[array.length - 1];
    }
    if (n >= array.length) {
        return array;
    }
    return array.slice(-n);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.

  _.each = function(collection, iterator) {
    var elements = [];
    for (var prop in collection) {
        elements.push(iterator(collection[prop], prop, collection));
    }
    return elements;
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
  };

  // Return all elements of an array that pass a truth test ('iterator' function argument)
  _.filter = function(collection, iterator) {
    var elements = [];
    for (var i = 0; i < collection.length; i++) {
        if (iterator.call(this, collection[i])) {
            elements.push(collection[i]);
        }
    }
    return elements;
  };


  // Return all elements of an array that don't pass a truth test (the 'iterator' function argument)
  _.reject = function(collection, iterator) {
    var elements = [];
    for (var i = 0; i < collection.length; i++) {
        if (!iterator.call(this, collection[i])) {
            elements.push(collection[i]);
        }
    }
    return elements;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    for (var i = 0; i < array.length; i++) {
        for (var t = i + 1; t < array.length; t++) {
            if (array[t] === array[i]) {
                array.splice(t, 1);
                t--;
            }
        }
    }
    return array;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var elements = [];
    for (var i = 0; i < array.length; i++) {
        elements.push(iterator(array[i]));
    }
    return elements;
  };


  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var elements = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][propertyName]) {
            elements.push(array[i][propertyName]);
        }
    }
    return elements;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var value = 0;
    if (initialValue) {
        value = initialValue;
    }
    for (var i = 0; i < collection.length; i++) {
        value = iterator(value, collection[i]);
    }
    return value;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    for (var prop in collection) {
        if (collection[prop] === target) {
            return true;
        }
    }
    return false;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    if (!iterator){
        return true;
    }
    for (var i = 0; i < collection.length; i++) {
        if (!iterator(collection[i])) {
            return false;
        }
    }
    return true;
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    if (!iterator) {
        var iterator = Boolean;
    }
    for (var i = 0; i < collection.length; i++) {
        if (iterator(collection[i])) {
            return true;
        }
    }
    return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i]) {
            obj[prop] = arguments[i][prop];
        }
    }
    return obj;
  };


  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i]) {
            if (!obj.hasOwnProperty(prop)) {
                obj[prop] = arguments[i][prop];
            }
        }
    }
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  //
  // When chained to another function... for example...
  //    var num = 0;
  //    var increase = function() {num++;};
  //    var increaseOnce = _.once(increase);
  // increaseOnce has essentially forked a copy of _.once and _.once's scope.
  // This is why the return copy can modify the variables ran and memo while still
  // allowing _.once to be used/chained to other functions... the original instance
  // of _.once is not getting modified, the forked copy is.
  _.once = function(func) {
    var ran = false;
    var memo;
    return function() {
        if (ran) {
            return memo;
        }
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    }
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var x
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    return setTimeout(func('a', 'b'), wait) {};
  };



  // Shuffle an array.
  _.shuffle = function(array) {
    var copy = [], n = array.length, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  /*_.sortBy = function(collection, iterator) {
    var sorted = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection)
    }
  };*/

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
    var outerArray = [];
    var innerArray = [];
    var length = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].length > length) {
            length = arguments[i].length;
        }
    }
    for (var j = 0; j < length; j++) {
        innerArray = [];
        for (var k = 0; k < arguments.length; k++) {
            innerArray.push(arguments[k][j]);
        }
        outerArray.push(innerArray);
    }
    return outerArray;


    /*if (args.length === 2) {
        var zipper = [];
        var zipperLength = Math.max(args[0].length, args[1].length);
        for (var i = 0; i < zipperLength; i++) {
            zipper.push([args[0][i], args[1][i]]);
        }
        return zipper;
    }
    if (args.length === 3) {
        var zipper = [];
        var zipperLength = 0;
        for (var i = 0; i < args.length; i++) {
            if (args[i].length > zipLength) {
                zipperLength = args[i].length;
            }
        }
        for (var i = 0; i < zipperLength; i++) {
            zipper.push([args[0][i], args[1][i], args[2][i]]);
        }
        return zipper;
    }*/

    /*var args = Array.prototype.slice.call(arguments);
    var zipper = [];
    var zipLength = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i].length > zipLength) {
            zipLength = args[i].length;
        }
    }
    var j = 0;
    while (var j < zipLength) {
        for (var k = 0; k < args.length; k++) {
            zipper.push(args[k][j]);
        }
        j++;
    }
    var chunkyZipper = [];
    while (zipper.length > 0) {
        chunkyZipper.push(zipper.splice(0, args.length));
    }
    return chunkyZipper;*/

    /*var args = Array.prototype.slice.call(arguments);
    var zipperLength = 0;
    var zipper = [];
    for (var i = 0; i < args.length; i++) {
        if (args[i].length > zipperLength) {
            zipperLength = args[i].length;
        }
    }
    for (var g = 0; g < zipperLength; g++) {
        for (var t = 0; t < args.length; t++) {
            zipper[g][t] = args[t][g];
        }
    }
    return zipper;*/
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
    var flatArray = [];
    function smash(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                smash(array[i]);
            } else {
                flatArray.push(array[i]);
            }
        }
    }
    smash(nestedArray);
    return flatArray;
  };


  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    var args = Array.prototype.slice.call(arguments);
    return args[0].filter(function(n) {
        return args[1].indexOf(n) != -1;
    });
    /*var args = Array.prototype.slice.call(arguments);
    var uniqArgs = [];
    for (var prop in args) {
        uniqArgs.push(_.uniq(prop));
    }
    var commonElements = uniqArgs[0].filter(function(val) {
        var gate = 0;
        for (var i = 1; i < uniqArgs.length; i++) {
            for (var g = 0; g < uniqArgs[i].length; g++) {
                if (args[i][g] === val) {
                    gate = gate + 1;
                }
            }
        }
        if (gate === uniqArgs.length - 1) {
            gate = 0;
            return true;
        }
    });
    return commonElements;*/
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args[0].length; i++) {
        for (var g = 1; g < args.length; g++) {
            for (var t = 0; t < args[g].length; t++) {
                if (args[g][t] === args[0][i]) {
                    args[0][i] = false;
                }
            }
        }
    }
    var uniqArgsInFirstArray = args[0].filter(function(n) {
        return Boolean(n);
    })
    return uniqArgsInFirstArray;
  };

}).call(this);
