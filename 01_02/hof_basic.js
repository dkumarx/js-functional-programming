const fs = require('fs');
 // UTF8 - encoding charcters mode
 /*
    BELOW CODE TRANSFORM "DATA.TXT" FILE TO JSON OBJECT USING HIGER ORDER FUNCTION (DEFAULT)
 *
 */
const output = fs.readFileSync('./data/data.txt', 'utf8')
                .split('\n')
                .map(line => line.trim().split('\t'))
                .reduce((categories, line) => {
                    categories[line[0]] = [];
                    categories[line[0]].push({
                        item: line[1],
                        month: line[2],
                        amount: 'AUD '+line[3]
                    })
                    return categories
                }, {});


console.log('Data -- ', JSON.stringify(output, null, 2))