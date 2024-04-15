var fs=require('fs')

fs.readFile('app.js','utf8',function(err,data){
    console.log(data)
})

