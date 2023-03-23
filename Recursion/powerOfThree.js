function powerOfThree(n){
    if(n===1) return true
    else if(n<1 || n%3!==0){
        return false
    }
    else{
        return powerOfThree(n/3)
    }
}
console.log( powerOfThree(9))

