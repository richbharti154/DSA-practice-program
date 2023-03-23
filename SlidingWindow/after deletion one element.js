let arr=[1,1,0,1]


function AfterDeletion(arr){
    let i=0, j=0
    let count=0,n=arr.length 
    let ans=0
    var zero=false
    while(j<n){
      if(arr[j]==0){
        count++
        zero =true

      }
      else if(count==1){
         let I=j-i+1
         ans=Math.max(ans,I)
      }
      else if(arr[i]=0){
        count--
        i++
        j++
      }
    }
    if(zero==false) ans= n
      return ans-1

}
console.log( AfterDeletion(arr))