var pages=require('./global')

var invoicesPageCount=pages();

invoicesPageCount.pageCount=30;

var invoices=function(){
    console.log("Hello from Invoices Modules...");
    pages.pageCount=20;
    console.log("Page count value:"+invoicesPageCount.pageCount)
}

module.exports.invoices=invoices;
