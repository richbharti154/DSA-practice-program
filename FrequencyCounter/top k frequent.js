//  nums = [1,1,1,2,2,3]
//  k=3
function frequent(nums,k){
     let obj={}
     for(let i in nums){
        obj[nums[i]]=(obj[nums[i]]||0)+1
     }
  let arr=Object.keys(obj)
    arr=arr.sort((a,b)=>obj[b]-obj[a])
    arr.length===k
     return arr.join()
     
}
  console.log(frequent([4,4,5,5,5,6]))