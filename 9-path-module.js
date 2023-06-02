const path = require('path')

console.log(path.sep)  //platform seperator 
console.log(path.join('/content/','subfolder','test.txt'))

const base = path.basename(path.join('/content/','subfolder','test.txt'))
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)