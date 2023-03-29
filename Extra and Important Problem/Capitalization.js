function capital(title){
let arr = title.split(" ")
   let result = []
   for(let i=0 ; i<arr.length ; i++){
       if(arr[i].length<3){
           result.push(arr[i].toLowerCase())
       }
       else{
           let s = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
           result.push(s)
       }
   }
   return result.join(" ")
}
console.log(capital('gee hu'))