var pages=require('./global')

var ordersPageCount=pages();
ordersPageCount.pageCount=5;

function orders(){
    console.log('orders module...')
    console.log('page count in orders modules '+ordersPageCount.pageCount)
}

module.exports.orders=orders;