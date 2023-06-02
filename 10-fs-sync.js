//we can intercat with file system 
//asyncronously non blocking 
//and as well syncronously blocking 
// fs.readFileSync ,fs.writeFileSync this only in the above we destructured
const {readFileSync,writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/read-sync.text',`Here is texts for ${first} ${second}`
,{flag:'a'})
console.log('Done with task ')
console.log('starting the next one ')