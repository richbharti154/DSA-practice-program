let arr=[1,1,4,6,2,3]
function frequent(arr){
    
let k=1
    let l=0
    let r=arr.length-1
    obj={}
    while(l<r){
    obj[arr[l]]=(obj[arr[r]]||0)+1
    }
    let arr1=arr.sort((a,b)=>obj[b]-obj[a])
    arr1.length=k
    return k
}
console.log(frequent(arr))