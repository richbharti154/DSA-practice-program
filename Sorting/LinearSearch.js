let arr=[12,34,56,78,90,13,36.76,42,91,34]
let x=42
let ans=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]==x)
    ans=i
     
   
}

if(ans!=-1){
    console.log(x,'present',ans)
}
else{
    console.log(x,'not present',ans)
}
