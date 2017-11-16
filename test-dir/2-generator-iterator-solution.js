// 2-generator-iterior-solution.js

// learn-generators -l en
// learn-generators run 2-generator-iterator-solution.js
// learn-generators verify 2-generator-iterator-solution.js
// learn-generators help

// generators are iterators, a wrapper around iterator object
// generators return a iterator object methods
// send(), next(), throw(), close() methods

function *factorial (n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
    yield result;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}

 // 1, 2, 6, 24, 120
 