 function duplicates (nums) {
    let fre=new Map()
   for(let i=0;i<nums.length;i++){
       if(fre.has(nums[i])){
           let v=fre.get(nums[i])
           fre.set(nums[i],v+1)
       }
       else{
           fre.set(nums[i],1)
       }
   }
    console.log(fre)
    for(let key of fre){
        if(key[1]!==1){
            return key[0]
        }
    
    }    
    
}
console.log([8,9,5,9,1,2,2,1])
    
    
      