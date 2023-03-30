let arr=[1,3,7,9,12,17,22,30,45]
let x=7
let l=0
let r=arr.length-1
let ans=-1

while(l<=r){
var mid=Math.floor((l+r)/2)
if(arr[mid]==x){
    ans=mid
    break
}
else if(x>arr[mid]){// right side

    l=mid+1
}
else{
    r=mid-1   // left side
}
}
if(ans!=-1){
    console.log(x,'present at array',ans)
}
else{
    console.log(x,'not present at array',ans)
}