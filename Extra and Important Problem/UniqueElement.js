let arr=[1,2,2,3,3,3,4,5,5,5,5,6]

function RemoveDuplicates(arr){
let count=1

for(let i=0;i<arr.length-1;i++){
    if(arr[i]!= arr[i+1]){
        arr[count]=arr[i+1]
        count++
    }
}
arr.length=count
return arr
}
console.log(RemoveDuplicates(arr))
