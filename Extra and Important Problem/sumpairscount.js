function getpairCount(arr,n,k){
  let ans=0
  var mp=new Map()
  for(let i=0;i<n;i++){
    let x=arr[i]
    let y=k-x
    if(mp.has(y)){
       ans+=mp.get(y) 
    }
    if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
    }
    else{
        mp.set(x,1)
    }
  }
  return ans
}
console.log(getpairCount([2,3,5,4,6],9))