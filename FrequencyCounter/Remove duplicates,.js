 
function RemoveDuplicates(arr,k){
 
let i=1
let j=1
while(i<j){
 if(arr[i]==arr[i-1]){
     i++
 }
 else{
     if(arr[i]==arr[j])
     i++
     j++
 }
 return j
}
}
console.log(RemoveDuplicates(arr,k))
 function RemoveDuplicates(){
    
   let i=1
   let j=1
   while(i<j){
    if(arr[i]==arr[i-1]){
        i++
    }
    else{
        if(arr[i]==arr[j])
        i++
        j++
    }
    return j
   }
 }
 console.log(RemoveDuplicates())
