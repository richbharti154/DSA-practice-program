function flatarr(arr){
    let flat=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false){
            flat.push(arr[i])
        }
        else flat=flat.concat(flatarr(arr[i]))
    }
    return flat
}
console.log(flatarr([1,2,3,[6,7]]))