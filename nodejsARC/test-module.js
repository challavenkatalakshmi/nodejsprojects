const {apiKey,add,multiply,sanitizeInput}=require('./function-module');
const Payment=require('./classes-module');

console.log(apiKey);
console.log(add(10,20));
console.log(multiply(2,3));
sanitizeInput('some input','some input file');

const paymentObj=new Payment();
paymentObj.setUpCreditCard();
paymentObj.processPayment();

