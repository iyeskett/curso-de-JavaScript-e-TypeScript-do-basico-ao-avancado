const fs = require('fs').promises;
const { dirname } = require('path');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        if (/\.git/g.test(fileFullPath) || /node_modules/g.test(fileFullPath)) continue;

        const stats = await fs.stat(fileFullPath);

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    }
}

readdir('C:\\workspace\\Udemy\\curso-de-JavaScript-e-TypeScript-do-basico-ao-avancado\\');
