

function reverse(arr,i,j){
   
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    }

    return arr
   
    
}
  let arr=[4,5,6,7,8,2]
     let k=3
    arr=reverse(arr,0,arr.length-1)
    arr=reverse(arr,0,k-1)
    arr=reverse(arr,k,arr.length-1)
    console.log(arr)
