//Eventual completion or a failure...

const fetchData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data fetched from server")
    },2000);
})

fetchData
.then(data => console.log(data))
.catch((err) => console.log(err))
.finally(()=>console.log("finally closed this."))