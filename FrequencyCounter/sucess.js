 let str="Success is not the key of Happiness, Happiness is the key of success";
  let result=``
  str=str.split(", ")
  .join('')
  str=str.split('')
   
   let obj={} ///frequency counter
   for(let i in str){
    obj[str[i].toLowerCase()]=(obj[str[i].toLowerCase()]||0)+1 
   }
   for(let key in obj){    //find out frequency counter
     result +=`${key} :- ${obj[key]}\n`;
   }

console.log(result)