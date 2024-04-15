/* const url=require('url');
const path=require('path')

const urlStr="https://localhost.com/path?query=value#fragment";

const parsedUrl=url.parse(urlStr,true);

//console.log(parsedUrl);
 console.log(parsedUrl.path);
console.log(parsedUrl.pathname);
console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.search);
console.log(parsedUrl.query);
console.log(parsedUrl.href);
console.log(parsedUrl.slashes);
console.log(parsedUrl.protocol);
console.log(parsedUrl.hash); 

const baseUrl="http://localhost.com/documents/";

const relativeUrl="file.txt";

const finalUrl=url.resolve(baseUrl,relativeUrl);

console.log(finalUrl);

const absolutePath=path.resolve(baseUrl,relativeUrl);

console.log(absolutePath);

console.log('-------------------------------')

const queryStr="https://localhost.com/path?query=someValue&id=123";

const parsedUrlQuery=url.parse(queryStr,true);

console.log(parsedUrlQuery.query);

const searchParams=new URLSearchParams(parsedUrlQuery.query);

console.log(searchParams.get("query"));
console.log(searchParams.get("id"));

 */


const util=require('util');
const fs=require('fs');

const readFileSync = util.promisify(fs.readFile);

readFileSync('notes.txt','utf8')
.then(data=>console.log(data))
.catch(err=>console.log(err));

const formattedText = util.format("%s is %d tax holder", 'ARC' , 1000);
console.log(formattedText);