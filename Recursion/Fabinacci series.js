function fibi(n){
    if(n==0 || n==1)   //base set
    return n
else /// else may be use or not
return fibi(n-1)+fibi(n-2)  ///recursive
}
console.log(fibi(7))
