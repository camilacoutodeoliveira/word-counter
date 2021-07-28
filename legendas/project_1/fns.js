const fs = require('fs');
const path = require('path');

function readDir(route) {
    let files = fs.readdirSync(route)
    return files.map(file => path.join(route, file))
}

module.exports = {
    readDir
}