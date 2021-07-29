const fs = require('fs');
const path = require('path');

function readDir(route) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(route)
            files = files.map(file => path.join(route, file))
            resolve(files)
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

function elementsEndingWith(array, pattern) {
    return array.filter(el => el.endsWith(pattern))
}

function removeCaseEmpty(array) {
    return array.filter(el => el.trim())
}

function removeCaseExists(array, patterText){
    return array.filter(el => !el.includes(patterText))
}

function removeCaseNumber(array){
    return array.filter(el =>{
        const num = parseInt(el.trim())
        return num !== num
    })
}


module.exports = {
    readDir,
    elementsEndingWith,
    readMyFile,
    readMyFiles,
    removeCaseEmpty,
    removeCaseExists,
    removeCaseNumber
}