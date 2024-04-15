class items{
    itemCode=10;

    getItems(){
        console.log("Get all Items")
    }

    viewItem(){
        const itemVal=this.itemCode*25;
        console.log("FInal Item Value"+itemVal)
        console.log("viewing Item");
    }
}

module.exports.items=items;