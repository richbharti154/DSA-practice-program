
function frequent(s,k){
    let arr1=[1,1,4,6,2,3]
let k=1
    let l=0
    let r=arr.length-1
    obj={}
    while(l<r){
    obj[s[l]]=(obj[s[r]]||0)+1
    }
    let arr=arr.sort((a,b)=>obj[b]-obj[a])
    arr.length=k
    return k
}
console.log(frequent(s,k))