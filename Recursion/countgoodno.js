

let m=BigInt(1000000007)
function powfun(a,n){
    let ans=BigInt(1)
    if(n===0) return ans

    ans=powfun(a,Math.floor(n/2))
    ans= BigInt(ans)
    if(n%2==1){
        // this is odd number
        ans=(ans%m*ans%m)%m
        ans=(ans%m*BigInt(a)%m)%m

    }
    else{
        ans=(ans%m*ans%m)%m
    }
    return ans%m
}
function count(n){
    var even=0, odd=0
    if(n%2==1){
      even= Math.floor(n/2)+1
      odd=Math.floor(n/2)
    }
    else{
        even=Math.floor(n/2)
        odd=Math.floor(n/2)
    }
    var ans=(powfun(5,even)%m*powfun(4,odd)%m)
    return ans
}
console.log(count(1))
       