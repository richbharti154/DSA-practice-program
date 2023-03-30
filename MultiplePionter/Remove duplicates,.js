let arr=[8,8,9,6,8,4,6]
function remove(arr){
  let count=1
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]!=arr[i+1]){
      arr[count]=arr[i+1]
      count++
    }

  }
  arr.length=count
  return arr
}
console.log(remove(arr))