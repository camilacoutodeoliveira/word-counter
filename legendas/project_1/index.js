const path = require('path')
const fn = require('./fns')

const route = path.join(__dirname, '../', 'legendas')

const simbols = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

fn.readDir(route)
    // .then(files => fn.elementsEndingWith(files, '.srt')) o mesmo da linha de baixo
    .then(fn.elementsEndingWith('.srt'))
    .then(filesSRT => fn.readMyFiles(filesSRT))
    .then(contents => contents.join('\n'))
    .then(allContent => allContent.split('\n'))
    .then(fn.removeCaseEmpty)
    // .then(lines => fn.removeCaseExists('-->')(lines)) o mesmo da linha de baixo
    .then(fn.removeCaseExists('-->'))
    .then(fn.removeCaseNumber)
    .then(fn.removeSimbols(simbols))
    .then(console.log)