let arr=[11,4,3,10,5,6,4]
let sum=0
let smax=0
let max=0
let tmax=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        tmax=smax
        smax=max
        max=arr[i]
    }
    else if(arr[i]>smax){
       smax=max
       max=arr[i]
    }
    else if(arr[i]>tmax){
        tmax=arr[i]
    }
    sum=max+smax+tmax
}

console.log(sum)