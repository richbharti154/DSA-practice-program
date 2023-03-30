let arr=[1,3,7,9,12,17,22,30,45]
let x=9
function binarySearch(l,r){
    // base set
    if(l>r){
        console.log(x,'that is not present array')
        return
    }
    // recursive
    let mid=((l+r)/2)
    if(arr[mid]==x){
       console.log(x,'that is present')
       return 
    }
       else if(x>arr[mid]){   // right
        binarySearch(mid+1,r)
       
    }
    else{
       binarySearch(mid-1,l) 
    }
}
let l=0
let r=arr.length-1

binarySearch(l,r)