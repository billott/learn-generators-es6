// 5-look-sync-do-async-solution.js

// learn-generators -l en
// learn-generators run 5-look-sync-do-async-solution.js
// learn-generators verify 5-look-sync-do-async-solution.js
// learn-generators help

var fs = require('fs')

function run (generator) {
  var it = generator(go)

  function go (err, result) {
    //console.log('Calling go function...')

    if (err) {
      return it.throw(err)
    }
    it.next(result)
  }

  go()
}

run(function* (done) {
  var firstFile
  
  try {
    //var dirFiles = yield fs.readdir('test-dir', done)
    var dirFiles = yield fs.readdir('NoNoNoNo', done)

    // Induce TypeError: Cannot read property '0' fo undefined
    var firstFile = dirFiles[0]

    } catch (e) {
    firstFile = null
  }
  
  console.log(firstFile)
})
