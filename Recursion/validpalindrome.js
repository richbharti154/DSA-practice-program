// let arr="A man, a plan, a canal: Panama"

// function reverse(str){
//     if(str.length<=1) return str
//     return reverse(str.slice(1))+str[0]
// }
// function reverse1(str){
//     if(reverse(str)===str)
//     return true

// return false
// }
// console.log(reverse1('bv'))
//  function valid(s){
//     s= s.toLowerCase().replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, "")
//     n= s.length;
//      left= 0;
//      right= s.length-1
//        if(n ===0) return true; 
//          if(n=== 2) return s[1]===s[0]
//      while(left<right){
//        if(s[left] !== s[right]) return false
//        left++
//        right--
//      }
//      return true
     
//  };
//  console.log(valid('madam'))
//  function isAlphaNumeric(str){
//    return /^[a-zA-Z0-9]+$/.test(str)
// }

function Reverse(str){

    if(str.length==1) return str
return Reverse(str.slice(1))+str[0]
}

 function palindrome(s) {
    let word=""
    for(let i=0 ; i<s.length;i++){
       if(isAlphaNumeric(s[i])){
           word+=s[i].toLowerCase()

       }
        
    }
  
    if(word.length==0) return true
    if(word==Reverse(word)){
        return true
    }
    return false
};
console.log(palindrome('arr'))
