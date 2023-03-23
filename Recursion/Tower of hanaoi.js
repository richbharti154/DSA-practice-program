function towerOfHanoi(n,A,C,B)
// a related to 
//b related to auxilaiarylike
// c related to from
  if (n==0) return
towerOfHanoi(n-1,A,B,C)
console.log(A,'->',C)
towerOfHanoi(n-1,B,C,A)
towerOfHanoi(3,'A','B','C')