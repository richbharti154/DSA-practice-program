 let height= [1,8,6,2,5,4,8,3,7]
function container(height){
    l=0
    r=height.length-1
    sum=0
    while(l<r){
        let smallside=Math.min(height[l],height[r]) 
        let area=(r-l)*smallside
        if(area>sum){
            sum=asrea
        }
        if(height[l]<height[r]){
            l++
        }
        else{
            i--
        }
        return sum

    }
 
}
console.log(container("height"))