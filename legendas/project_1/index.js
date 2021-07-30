const path = require('path')
const fn = require('./fns')

const route = path.join(__dirname, '../', 'legendas')

const simbols = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

// const joinElements = array => array.join(' ')
// const splitLine = allContent => allContent.split('\n')
// const splitWords = allContent => allContent.split(' ')


fn.readDir(route)
    // .then(files => fn.elementsEndingWith(files, '.srt')) o mesmo da linha de baixo
    .then(fn.elementsEndingWith('.srt'))
    .then(fn.readMyFiles)
    .then(fn.joinElements)
    // .then(splitLine)
    .then(fn.splitBy('\n'))
    // .then(contents => contents.join('\n'))
    // .then(allContent => allContent.split('\n'))
    .then(fn.removeCaseEmpty)
    // .then(lines => fn.removeCaseExists('-->')(lines)) o mesmo da linha de baixo
    .then(fn.removeCaseExists('-->'))
    .then(fn.removeCaseNumber)
    .then(fn.removeSimbols(simbols))
    .then(fn.joinElements)
    .then(fn.splitBy(' '))
    // .then(splitWords)
    .then(fn.removeCaseEmpty)
    .then(fn.removeCaseNumber)
    .then(fn.groupWords)
    .then(fn.orderByNumber('qtde', 'desc'))
    .then(console.log)