let arr=[1,2,4,5,6,8]
let n=arr.length
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
// mp.forEach((value,key)=>{
//   console.log('key=',key," and value=",value)
// })
  for (let i=0;i<n;i++){
    if(arr[i]==arr[2]&& arr[i]==arr[6]){
      return i
    }
   
  }
  console.log(arr)

