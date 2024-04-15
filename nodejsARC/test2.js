var url=require('url');
var item=require('./modules/items')
var invoices=require('./modules/invoices')
var orders=require('./modules/orders')

const urlLink = "http://localhost:50/get?year=2020&month=aug&day=26";

const urlObj=url.parse(urlLink);

//console.log(urlObj.query)

var o=new item.items();

// o.getItems();
// o.viewItem();


invoices.invoices()
orders.orders()



