function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++)
        if(arr[j]>arr[j+1])
        arr[i]=arr[i]+arr[j+1]
        arr[j+1]=arr[j+1]-arr[i]
        arr[i]=arr[i]-arr[j+1]
    }
    return arr
}
console.log(bubbleSort([5,6,3,2,9]))