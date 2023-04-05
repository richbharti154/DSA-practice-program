// let arr=[11,11,2,2,2,4,,7,7,7,9,9]
function withoutpair(arr,n){
let map=new Map()
for(let i=0;i<n;i++){
    let x=arr[i]
    if(map.has(x)){
        map.set(x,map.get(x)+1)
    }
    else{
        map.set(x,1)
    }
    console.log(map)
}


let ans=[]
  map.forEach((value,key)=>{
    if(value%2==1)
    ans.push(key)
  })
  return ans
  
}
 console.log(withoutpair([11,11,2,2,2,4,7,7,7,9,9],11))
