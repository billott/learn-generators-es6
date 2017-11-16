// 1-run-stop-run-solution.js
// learn-generators run 1-run-stop-run-solution.js
// learn-generators verify 1-run-stop-run-solution.js
// learn-generators help

// astericks mark function as generator

function *range(from, to) {
  var i = from

  // Could do it with a for loop also
  // for(var i = from; i <= to; i++) {
    while (i <= to) { 
    // yield pauses the expression
    yield i
    ++i
  }
}

for (var r of range(5, 10)) {
  console.log(r)
}
// should print: 5, 6, 7, 8, 9, 10