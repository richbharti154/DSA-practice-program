function abc(arr,x){
    let l=0
    let r=arr.length-1
    let ans=-1
    while(l<=r){
        var mid=Math.floor((l+r)/2)
        if(arr[mid]==x){
            ans=mid
            return ans      // search
            
        }
        else if(x>arr[mid]){
            l=mid+1
        }
        else{
            r=mid-1
        }
        
    }
        return ans
}
console.log(abc([1,2,3,5,6],3))