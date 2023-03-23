// for example=(3,5)
function pow(b,exp){
    if(exp==0) return 1
    return b*pow(b,exp-1)
}
 console.log(pow(3,5))