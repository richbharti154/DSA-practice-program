function factorial(n){
    /// base set
    if(n<=0) return 1
    if(n==1) return 1
     //recursive
    return  n*factorial(n-1)

}
console.log(factorial(5))