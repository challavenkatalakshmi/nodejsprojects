const add=(a,b)=>a+b;

const multiply=(a,b)=>a*b;

function sanitizeInput(inputParam,outputFile){
    console.log(inputParam);
    console.log(outputFile);
}

const apiKey="abcdefgh";

module.exports={
    apiKey,
    add,
    multiply,
    sanitizeInput
}