// a='tree'
// b='eert' find out this type of question 
function sortCharacter(nums){
    // nums='tree'
    // //  let arr='eert' 
    let obj={}
   
    for(let i in nums){
     obj[nums[i]]=(obj[nums[i]]||0)+1
    }
   let   arr=nums.split('').sort()
   
   
    return arr.join('')

     
  
}
 console.log( sortCharacter('tree'))
