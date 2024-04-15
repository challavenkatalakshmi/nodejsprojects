var fs=require('fs')

fs.appendFile('test.js','console.log("testing,,,")',function(err){
    console.log('appended')
})