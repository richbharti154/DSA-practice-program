
function missing(arr){
 var  map=new Map()
for(let i=0;i<arr.length;i++){
   
    let x=arr[i]
    if(map.has(x)){
        map.set(x,map.get(x)+1)
    }
    else{
        map.set(x,1)
    }
}
console.log(map)
for(let i=1;i<=arr.length;i++){
if(map.has(i)==false){
    return i
}

}
}
console.log(missing([1,2,3,4,6,7,8]))