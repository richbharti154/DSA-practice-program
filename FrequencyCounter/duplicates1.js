
function duplicate(arr,n){
    var mp=new Map()
    for(let i=0;i<n;i++){
        var x=arr[i]
        if(mp.has(x)){
       mp.set(x,mp.get(x)+1)
        
    }
    else{
        mp.set(x,1)
    }
    
    }
let ans=[]
    mp.forEach((value,key)=>{
        if(value>1){
            ans.push(key)
        }
    })
    if(ans.length==0){
        ans.push(-1)
    }
    ans.sort(function(a,b){return a-b})
return ans
}

console.log(duplicate([2,3,1,2,3],5))