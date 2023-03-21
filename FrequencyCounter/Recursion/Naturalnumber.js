// let n=8
function Natural(n){
    //baseset
    if(n<=0) return 0
    //recursive
    return n+Natural(n-1)

}
console.log(Natural(8))