let word='aeiioaneiou'
function SubstringVowel(word){
    var ans=0, n=word.length
    count=1
    len=1
    for(let i=1;i<n;i++){
        if(word[i-1]<=word[i]){
            len++
        }
        if(word[i-1]!=word[i]){
        
            count++
        }
        else{
            count++
            len++
        }
        if(count==5){
            ans=Math.max(ans,len)
        }
    }
    return ans
}
console.log( SubstringVowel(word))