let arr=[1,1,2,2,3]

 function RemoveDuplicates(arr){
 
 let n=arr.length
let i=1
let j=1
while(i<n){
 if(arr[i]==arr[i-1]){
     i++
 }
 else{
     if(arr[i]=arr[j])
     
     j++
     i++
 }
    
}
arr.length=j
  return arr
 }
 
console.log(RemoveDuplicates(arr))
 