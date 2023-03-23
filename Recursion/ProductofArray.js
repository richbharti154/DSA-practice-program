//  a=[2,3,4,8]
//  b=[8,0,5,6]
//this is the first method
function product(arr){
 if(arr.length===0) return 1
 return arr[0]*product(arr.slice(1))
}
 console.log(product([2,3,4,5]))

