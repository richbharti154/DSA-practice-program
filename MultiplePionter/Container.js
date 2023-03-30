//  let height= [1,8,6,2,5,4,8,3,7]
// function container(height){
//     l=0
//     r=height.length-1
//     sum=0
//     while(l<r){
//         let smallside=Math.min(height[l],height[r]) 
//         let area=(r-l)*smallside
//         if(area>sum){
//             sum=area
//         }
//         if(height[l]<height[r]){
//             l++
//         }
//         else{
//             r--
//         }
//         return sum

//     }
 
// }
// console.log(container([6,7,2,3]))

let height=[8,7,6,974,9]
function container(height){
    let l=0
    let r=height.length-1
    let sum=0
    while(l<r){
        let minheight=Math.min(height[l],height[r])
        let width=(r-l)
        let area=minheight*width
        if(area>sum){
            area=sum
        }
        if(height[l]<height[r]){
            l++
        }
        else{
            r--
        }
    }
    height.length=sum
    return sum
}
console.log(container(height))