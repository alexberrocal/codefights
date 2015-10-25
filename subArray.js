/*
Determine if the given subarray is a subarray of the given array.
A string is a subarray of another string if the first string is not longer than the second, and all its letters are present in the second string in the exact same order, but not necessarily consecutive. Cases of the letters do not matter.

Example:

subarraysearch("ABCdefgh", "bCf) = true
subarraysearch("ABCdefgh", 'i') = false

[input] string array

Input string, 2 < array < 10.
[input] string subarray

A subarray.
[output] boolean

true if subarray is a subarray of the array, false otherwise.

*/
function subarraysearch(a, s) {
  return a.match(RegExp(s.split('').join('\\w*'),"i")) ? true : false
}
