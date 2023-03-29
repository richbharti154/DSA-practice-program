function checkInteger(x){
    let pattern=/^-?[0-9]+$/
    let res=pattern.test(x)
    return res
}
console.log(checkInteger(89))