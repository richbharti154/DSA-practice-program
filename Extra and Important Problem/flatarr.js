function fibi(n){
    if(n==0 || n==1) return n
   
    else{
 return fibi(n-1)+fibi(n-2)
    } 
    
}
console.log(fibi(6))