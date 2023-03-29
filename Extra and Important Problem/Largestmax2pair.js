let arr=[9,1,5,3,2]
let sum=0
let smax=0
let max=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        smax=max
        max=arr[i]
    }
    else if(arr[i]>smax){
        smax=arr[i]
    }
    // sum=max+smax
}
console.log(max+smax)



