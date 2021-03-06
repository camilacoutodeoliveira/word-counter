const fs = require('fs');
const path = require('path');

// A importancia de se ter funções reutilizaaveis, o qual cada função assume uma responsabilidade
// tornando a leitura do código mais legivel e facil de se entender
//DRY Dont repeat yourself

function readDir(route) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(route)
            const filesFinished = files.map(file => path.join(route, file))
            resolve(filesFinished)
        } catch (e) {
            reject(e)
        }
    })
}

function readMyFile(route) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(route, {
                encoding: 'utf8'
            })
            resolve(content.toString())
        } catch (e) {
            reject(e)
        }
    })
}

function readMyFiles(routes) {
    return Promise.all(
        routes.map(route => readMyFile(route))
    )
}

function elementsEndingWith(pattern) {
    return function (array) {
        return array.filter(el => el.endsWith(pattern))
    }
}

function removeCaseEmpty(array) {
    return array.filter(el => el.trim())
}

function removeCaseExists(patterText) {
    return function (array) {
        return array.filter(el => !el.includes(patterText))
    }
}

function removeCaseNumber(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removeSimbols(simbols) {
    return function (array) {
        return array.map(el => {
            return simbols.reduce((acc, simbol) => {
                return acc.split(simbol).join('')
            }, el)
            //code mutavel
            // let newText = el
            // simbols.forEach(simbol => {
            //     newText = newText.split(simbol).join('')
            // })
            // return newText
        })
    }
}

function joinElements(array) {
    return array.join(' ')
}

function splitBy(simbol) {
    return function (item) {
        return item.split(simbol)
    }
}

function groupWords(words) {
    return Object.values(words.reduce((acc, word) => {
        const w = word.toLowerCase()
        const qtde = acc[w] ? acc[w].qtde + 1 : 1
        acc[w] = {
            element: w,
            qtde
        }
        return acc
    }, {}))
}

function orderByNumber(attr, ord = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ord === 'asc' ? asc : desc)
    }
}

module.exports = {
    readDir,
    elementsEndingWith,
    readMyFile,
    readMyFiles,
    removeCaseEmpty,
    removeCaseExists,
    removeCaseNumber,
    removeSimbols,
    joinElements,
    splitBy,
    groupWords,
    orderByNumber
}