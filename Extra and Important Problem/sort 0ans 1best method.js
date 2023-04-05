function segration0and1(arr,n){
    let l=0
    let r=n-1
    while(l<r){
        if(arr[l]==0){
            l++
            continue;
        }
        else if(arr[r]==1){
            r++
            continue;
        }
        arr[l]=1,arr[r]=0
        arr[l]=arr[l]+arr[r]
        arr[r]=arr[l]-arr[r]
        arr[l]=arr[l]-arr[r]
        l++
        r--
    }
}
console.log(segration0and1([1101010]))
