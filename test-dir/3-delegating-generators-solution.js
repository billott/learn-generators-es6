// 3-delegating-generators-solution.js

// learn-generators -l en
// learn-generators run 3-delegating-generators-solution.js
// learn-generators verify 3-delegating-generators-solution.js
// learn-generators help

function *flat (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; ++i) {
        // Let use recursive functions.
        yield *flat(arr[i])
      }
    } else {
      yield arr
    }
  }
  
  var A = [1, [2, [3, 4], 5], 6]
  
  for (var f of flat(A)) {
    console.log(f)
  }
  // 1 2 3 4 5 6

  
  // var a = arr
  // for (var i = 0; i < arr; ++i) {
  //   if (typeof a[i] === 'object') {
  //     a = a.slice[1]
  //   } else {
  //     yield a[0]
  //     a = a.slice[1]
  //   }
  // }
