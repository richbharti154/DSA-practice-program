function Anagram(str,str1){
    let a='cat'
    let b='tac'
    let freq={}
    let freq1={}
     for(let i=0;i<str.length;i++){
        freq[str[i]]=(freq[str[i]]||0)+1
     }
     for(let i=0;i<str1.length; i++){
        freq1[str1[i]]=(freq1[str1[i]]||0)+1
     }
     for(key in freq){
       if (![key] ==freq1){
            return false
        }
     }
    if(freq1[key]!==freq[key]){
        return false
    }
    return true
}
  console.log(Anagram('anagram','nagarama'))