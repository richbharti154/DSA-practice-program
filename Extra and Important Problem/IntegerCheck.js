// function checkInteger(x){
//     let pattern=/^-?[0-9]+$/
//     let res=pattern.test(x)
//     return res
// }
// console.log(checkInteger(89))
let x='5'
if(typeof x=='number' && !isNaN(x)){
    // check if it is integer
    if(Number.isInteger(x)){
        console.log(`${x} is integer `)
    }                                        /// this is second method
   else{
    console.log(`${x} is a float value`)
   }
} else{
    console.log(`${x} is not a number`)
}