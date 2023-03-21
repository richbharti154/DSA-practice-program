function tailrec(n){
    //base set
    if(n==0) return
    //recursive
    // console.log(n)
    return tailrec(n-1)  ///and nit return it will be work  
   
}
   tailrec(5)