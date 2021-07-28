const path = require('path')
const fn = require('./fns')

const route = path.join(__dirname, '../', 'legendas')
const files = fn.readDir(route)
console.log(files)