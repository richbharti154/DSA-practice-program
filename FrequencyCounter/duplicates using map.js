let arr=[2,4,1,2,4,3,1]
function repeat(arr,n){
    var mp=new Map()
    for(let  i=0;i<n;i++){
        let x=arr[i]
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }
        else{
            mp.set(x,1)
        }
    }
    console.log(mp)
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
console.log(repeat([2,4,4,6,7,7,9],7))