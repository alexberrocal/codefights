/*
You are given an array of integers. Return its element x such as 2 * x equals the sum of the other elements of the given array.

If there is more than one such element, return the one that appears first.

It is guaranteed that such x exists.

Example:

For A = [1, 2, 3, 4, 5], the output should be 5.

[input] array.integer A

3 ≤ |A| ≤ 100,
-1000 ≤ A[i] ≤ 1000
[output] integer

Element x from the given array.
*/

function HalfSum(A) {
   i = A.length
   while(i--){
     t=A[i]
     if(A.reduce(function(t, n){ return t + n }, 0)-t == 2*t) return t
    }
}
