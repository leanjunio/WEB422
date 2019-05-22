const _ = require('lodash')

const arr = _.chunk(['a','b','c','d','e','f','g','h','i','j','k','l'], 3)
console.log(arr)

console.log(`Lodash version: ${_.VERSION}`)