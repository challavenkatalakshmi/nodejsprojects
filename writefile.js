var fs=require('fs')

fs.writeFile('test.js','console.log("writting into file...")',
function(err){
    console.log('done')
}
    
)