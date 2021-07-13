const fs = require('fs');
const readShortData = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
const writeShortData = fs.createWriteStream(__dirname + '/news.txt');

readShortData.on('data', (chunk) => {
    console.log("[Новые данные получены]:\n");
    writeShortData.write(chunk);
});