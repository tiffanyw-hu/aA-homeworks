const readline = require('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft === 0) {
    return sum;
  };

  reader.question("Number Please ", function(answer) {
    sum += parseInt(answer);
    numsLeft -= 1;

    completionCallback(sum);

    addNumbers(sum, numsLeft, completionCallback);
  });
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
