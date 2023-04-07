let n=1
if(n==1){
    console.log('not prime and not composite')
}
let check=false
for(let i=2;i<Math.sqrt(n);i++){
    if(n%i==0){
    check=false
    break
}
}
               //  time complexity  o(nroute/2*n)
if(check){
    console.log('prime')
}
else{
    console.log('not prime')
}