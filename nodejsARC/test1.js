function getUserInfo(){
    setTimeout(()=>{
        console.log('user info will be returned...')        
    },1000);
}
function getUserContacts(){
    console.log('get User contacts information...');
}

// getUserInfo();
// getUserContacts()

/* try{
    console.log("Get User Info")
}
catch(e){
    console.log("error in")
}
finally{
    console.log("finally")
}

getUserContacts() */

//Example 3:-PROMISES:-

var user = new Promise((resolve,reject)=>{
    console.log("getting user info")
    //resolve("Return User Info");
    reject("Failed to return users")
}).then((data)=>{
    getUserContacts();
}).catch((error)=>{
    console.log(error);
})