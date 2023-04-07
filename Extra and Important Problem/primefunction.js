function isPrime(n){
    
    let check=false
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i==0){
        check=false
        break
    }
    }
    if(n==1){
        return false
    }
   else if(check){
     return   true
    }
    else{
       return  false
    }
}
let n=9
let primes=[]
for(let i=2;i<=n;i++){
    if(isPrime(i)){
        primes.push(i)
    }
}


console.log(primes)