function mergeSort(arr,l,r,m){
    let n1=m-l+1
    let n2=m-r

    var L=new Array(n1);
    var R=new Array(n2);
    var L=[]
    var R=[]

    for(var i=0;i<n1;i++)
        L[i]=L[L+i]
        for(j=0;j<n2;j++)
        R[i]=[m+1+j]
    for(var i=l;i<=m;i++){
        L.push(arr[i])
    }
    for(var i=m+1;i<=R;i++){
        R.push(arr[i])
    }
    n1=L.length
    n2=R.length

    var i=0
    var j=0
    var k=l

    while(i<n1&&i<n2){
        if(L[i]<r){
            arr[k]=L[i]
            i++
        }
        else{
            arr[k]=R[i]
            j++

        }
        k++
    }
}
