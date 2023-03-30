let arr=[7,5,7,9]
var mp= new Map()
/// has
// get
// set
for(let i=0;i<arr.length;i++){
    let x=arr[i]
    if(mp.has(x)){  // already present
    mp.set(x,mp.get(x)+1)
    }
    else{   // not present
      mp.set(x,1)
    }
}
//  console.log(mp.get(7))
mp.forEach((value,key)=>{
  console.log('key=',key," and value=",value)
})