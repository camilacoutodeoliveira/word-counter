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

function elementsEndingWith(array, pattern){
    return array.filter(el => el.endsWith(pattern))
}

module.exports = {
    readDir,
    elementsEndingWith
}