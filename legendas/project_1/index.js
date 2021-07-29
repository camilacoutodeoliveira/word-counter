const path = require('path')
const fn = require('./fns')

const route = path.join(__dirname, '../', 'legendas')

fn.readDir(route)
    .then(files => fn.elementsEndingWith(files, '.srt'))
    .then(filesSRT => fn.readMyFiles(filesSRT))
    .then(contents => contents.join('\n'))
    .then(allContent => allContent.split('\n'))
    .then(lines => fn.removeCaseEmpty(lines))
    .then(lines => fn.removeCaseExists(lines, '-->'))
    .then(lines => fn.removeCaseNumber(lines))
    .then(console.log)