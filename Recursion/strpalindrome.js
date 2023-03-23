function stringPalindrome(str){
    if(str.length<=1) return true
    return(str[0])==str.slice(-1) && stringPalindrome(1,-1) 
}
console.log(stringPalindrome('madam'))