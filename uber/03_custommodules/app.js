const store=require('./database/store/dataStore')
const util=require('./util/utility')
store.getAllEmployees((employees)=>{
    let filename='customers.json';
    util.writeToFile(filename,employees);       
});

