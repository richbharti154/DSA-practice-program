// let arr=[1,1,2,2,3]


 
//  let n=arr.length
// let i=1
// let j=1
// while(i<n){
//  if(arr[i]==arr[i-1]){
//      i++
//  }
//  else{
//      if(arr[i]=arr[j])
     
//      j++
//      i++
//  }
    
// }
// arr.length=j
//   return arr
 
 
// console.log(arr)

//  let arr=[1,1,2]
let count=1
 function removes(arr){
   
 for(let i=0;i<arr.length-1;i++){
   if(arr[i]!==arr[i+1]){
   arr[count]=arr[i+1]
     count++
 }
}

return count
}
console.log(removes([1,1,2,2,3,3]))
