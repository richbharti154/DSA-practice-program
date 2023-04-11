
function reverse(str){
    let resStr=""
    for(let j=str.length-1;j>=0;j--){
        resStr+=str[j]
    }
    return resStr
  }
  console.log(reverse('hlo hi '))
 
   function reverseWord(s) {
      let arr=s.split(" ")
      let result=[]
      for(let i=0;i<arr.length;i++){
          result.push(reverse(arr[i]))
     }
      return result.join(" ")
  };
 console.log(reverseWord('this is'))