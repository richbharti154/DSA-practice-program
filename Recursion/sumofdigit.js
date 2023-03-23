function sumOfDigit(n){
    //base set
 if(n===0) return 0
 //recursive
 return n%10+sumOfDigit(Math.floor(n/10))
}
console.log(sumOfDigit(10))