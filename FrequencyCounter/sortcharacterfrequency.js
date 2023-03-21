// a='tree'
// b='eert' find out this type of question 
function sortCharacter(nums){
    // nums='tree'
    // //  let arr='eert' 
    let obj={}
    for(let i in nums){
     let c=   obj[nums[i]]=(obj[nums[i]]||0)+1
    }
     arr=nums.split('').sort()
   
   
    return arr.join('')

     
  
}
 console.log( sortCharacter('tree'))
