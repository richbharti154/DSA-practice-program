  // kadanegram algorithm
  
  let arr=[-25,-3,-78,-4,-58,-14,-6,-9]
  let maxSum=-Infinity
    var sum=0
  
    for(let i=0;i<arr.length;i++){
       sum=sum+arr[i]
        if(sum>maxSum){
            maxSum=sum
        }
        
       if(sum<0)
       sum=0
    //    maxSum=Math.max(maxSum,sum)
    }
    console.log(maxSum)

 