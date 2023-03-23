//  function isMatch(s, p) {
   
//       var regex = new RegExp(p);
//       return (s.search(regex)>-1 && s.replace(regex,"").length===0)
//     };
//     console.log(isMatch( "aa","a*"))
// 
function match(s,p){
    var regex=new RegExp(p)
    return(s.search(regex)>-1 && s.replace(regex,'').length===0)
}
console.log(match('aa','a*'))