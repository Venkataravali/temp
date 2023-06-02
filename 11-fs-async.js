//asynchronous manner 
//we need to provide callback it will run once it' done 

const {readFile,writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
   const first = result ;
   readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result ;
    writeFile('./content/read-async.text',`Here is information about ${first} and ${second}`,{flag:'a'},(err,result)=>{
        if(err){
            console.log(err)
            return err
        }
       console.log('done with this task ' )
    })
    
   })
})
console.log('straing next task ')