const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} > ${el2}? `, function(answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    };
  })

};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if ( i == (arr.length - 1)) {
  outerBubbleSortLoop(madeAnySwaps);
}

  if ( i < arr.length - 1) {
    askIfGreaterThan( arr[i], arr[i+1], (isGreaterThan) => {
      if ( isGreaterThan === true) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
  }
  )}
};

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 7, 2], function (arr) {
  console.log(JSON.stringify(arr));
  reader.close();
});
