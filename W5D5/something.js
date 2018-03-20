Array.prototype.myEach = function(callback) {
  for ( let i = 0; i < this.length; i++ ) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  array = [];
  this.myEach(el) {
    array.push(callback[el]);
  };
  return array;
};

Array.prototype.myReduce = function(callback, initialValue) {
  if (initialValue) {
    acc = initialValue;
  } else {
    acc = this[0];
  };
  this.myEach(function(el) {
    if (acc === this[0]) {
      next;
    }
    acc = callback(el, acc);
  });
  return acc;
};

console.log([1, 2, 3].myReduce(function(el, acc) {
  return acc + el;
}, 25));

function range(start, end) {
  result = [];
  (if start === end) {
    return result;
  }

  let stacks = range(start, end - 1);
  stacks.push(end - 1);
  return stacks;
};

console.log(range(1, 3));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let lastNum = arr[arr.length - 1];
  let result = sumRec(arr.slice(0, arr.length - 1)) + lastNum;
  return result;
}

console.log(sumRec([1, 2, 3]));

function fibonacci(n) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
};

console.log(fibonacci(5));
