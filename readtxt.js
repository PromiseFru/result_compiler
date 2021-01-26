const fs = require('fs');

let center = 11004
let name = ""

// let centerNumberPattern = new RegExp(`^Centre No:\\s+${center}\\s+[\\w*\\s]+(.)+`, 'gmi');
// let centerNamePattern = new RegExp(`Centre No:\\s+[\\d*]\\s+${name}+\\s+[\\w*]*\\s+`, 'gmi');

try {
    fs.readFile(__dirname + '/test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        let search = data.toString().match(centerNumberPattern);
        console.log(search);
    });
} catch (e) {
    console.log('Error:', e.stack);
}