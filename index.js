//section2
    //lesson5
    console.log('Hello Node.js!')

//section3
    //lesson2
    const fs = require('fs')
    fs.writeFileSync('notes.txt', 'Hallo I am Hafidh, I Live in Bandung')
    //lesson3
    const checkUtils = require('./src/utils.js')
    checkUtils()
    //lesson4
    const validator = require('validator')
    console.log(validator.isURL('https://mead.io')) // Print: true
    //lesson5
    // import chalk from 'chalk';
    // console.log(chalk.blue('Hello world!'));

