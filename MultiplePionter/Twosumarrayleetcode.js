let arr=[7,2,11,15]
let k=9
function twoinput(arr,target){
    let i=0
    let j=arr.length-1
    while(i<j){
        if(arr[i]+arr[j]===target){
            return[i+1,j+1]
        }
        else if(arr[i]+arr[j]>target){
        j=j-1
    }
    else if(arr[i]+arr[j]<target) {
     i=i+1
    }
}

}
console.log(twoinput(arr,k))