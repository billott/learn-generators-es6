// 6-look-sync-make-promise-solution.js

// learn-generators -l en
// learn-generators run 6-look-sync-make-promise-solution.js
// learn-generators verify 6-look-sync-make-promise-solution.js
// learn-generators help

// Using Promises, like callbacks, no wait

function askFoo () {
    return new Promise(function (resolve, reject) {
      resolve('foo')
    })
  }
  
// generator in es6
function run (generator) {
    var it = generator()

    it.next().value
    .then(result => it.next(result)) 
    .catch(err => it.throw(err))

}
  
run(function* () {
    // improve: errors?
    var foo = yield askFoo()
    console.log(foo)
})

  ///////////////////////////////////

// Why use const over function key word?

// const askFoo = () => new Promise((resolve, reject) => 
// resolve('foo'))

// const run = generator => {
//   const it = generator()
    
//   it.next().value
//     .then(result => it.next(result)) 
//     .catch(err => it.throw(err))
// }

// run(function* () {
//   try {
//     const foo = yield askFoo()
//     console.log(foo)
//   } catch (e) {
//     console.log(e)
//   }
// })
