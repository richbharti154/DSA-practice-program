let arr="A man, a plan, a canal: Panama"

function reverse(str){
    if(str.length<=1) return str
    return reverse(str.slice(1))+str[0]
}
function reverse1(str){
    if(reverse(str)===str)
    return true

return false
}
console.log(reverse1('bv'))
