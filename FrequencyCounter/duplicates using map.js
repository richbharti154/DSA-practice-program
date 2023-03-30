let arr=[2,4,1,2]
function repeat(arr,n){
    var mp=new Map()
    for(let  i=0;i<n;i++){
        let x=arr[i]
        if(Map.has(x)){
            Map.set(x,map.get(x)+1)
        }
        else{
            map.set(x,1)
        }
    }
    let maxfreq=0
    let ans=0
    mp.forEach((value,key)=>{
  if(value>maxfreq){
    maxfreq=value
    ans=key
  }
  else if(value==maxfreq){
    if(key<ans){
        ans=key
    }
  }
  
    })
    return ans
}
console.log(repeat(arr))