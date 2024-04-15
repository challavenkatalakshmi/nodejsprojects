function fetchData(callback){
    setTimeout(()=>{
        console.log("data fetched from server...");
        callback()
    },2000);
}

fetchData(()=>{
    console.log("Callback Executed...")
})