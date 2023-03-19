function Anagram(str,str1){


let fre={}
let freq1={}
for(let i=0;i<str.length;i++){
 fre[str[i]]=(fre[str[i]]||0)+1
}
for(let i=0;i<str.length;i++){
    freq1[str1[i]]=(freq1[str1]||0)+1
}
for(key in fre){
    if(!freq1[key]){
        return false
    }
    if(freq1[key]!=fre[key]){
        return false
    }
    return true
}

}
console.log(Anagram('anagram','nagaram'))

