async function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched...")
        },2000);
    })
}

async function fetchDataAndLog(){
    const data=await fetchData();
    console.log(data);
}

fetchDataAndLog();