
// function reverse(arr){
//     let i=0
//     let j=arr.length-1
//     while(i<j){
//    let temp=arr[i]
//    arr[i]=arr[j]     // this is first method
//    arr[j]=temp
//    i++
//    j--
// }
// return arr
// }
// console.log(reverse([1,2,3,4]))


// using extraarray
function reverse(arr){
    let i=0
    let j=arr.length-1
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        j--
        i++
    }
  return arr
}
let arr1=[6,7,8]
console.log(reverse(arr1))