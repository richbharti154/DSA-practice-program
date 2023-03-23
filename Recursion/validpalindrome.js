// let arr="A man, a plan, a canal: Panama"

function validPalindrome(arr){
let n=arr.length
arr=arr.toLowerCase().replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, "")
left=0
right=arr.length-1
if(n===0)  return true
if(n===2) return arr[1]==arr[0]
while(left<right){
    if(arr[left]!==arr[right]) return false
    left++
    right++

}
return true
}
console.log(validPalindrome('Aman','Panama'))