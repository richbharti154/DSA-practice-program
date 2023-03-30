var productExceptSelf = function(nums) {

    let n=nums.length
    let FinalArr=new Array
    let prefix = new Array
    prefix[0]=nums[0]
    
    for(let i=1;i<n;i++){
        prefix[i]= prefix[i-1]*nums[i]
    }
    
    let suffix = new Array(n)
    suffix[n-1] = nums[n-1]
    
    for(let i=n-2;i>=0 ;i--){
        suffix[i]=suffix[i+1] * nums[i]
    }
    
    FinalArr[0]=suffix[1]
    FinalArr[n-1]= prefix[n-2]
    
    for(let i= 1 ; i<=n-2 ; i++){
        FinalArr[i]= prefix[i-1] * suffix[i+1]
    }
      return FinalArr
        
    };
    console.log( productExceptSelf([2,3,4,5]))
    