// 4-catch-error-solution.js

// learn-generators -l en
// learn-generators run 4-catch-error-solution.js
// learn-generators verify 4-catch-error-solution.js
// learn-generators help

// yield as entry point for the iterator
function *upper (items) {
    for (var i = 0; i < items.length; ++i) {
      try {
        yield items[i].toUpperCase()
      } catch (e) {
        //console.log('Error: %s ', e);
        yield 'null'
      }
    }
  }
  
  var badItems = ['a', 'B', 1, 'c']
  
  for (var item of upper(badItems)) {
    console.log(item)
  }
  // want to log: A, B, null, C
  