/*
Given a string, reverse it omitting all non-alphabetic characters.

Example:

For str1 = "krishan" the output should be "nahsirk".
For str1 = "ultr53o?n" the output should be "nortlu".
[input] string str1

A string consists of lowercase latin letters, digits and symbols.
*/
function reverse_string(s) {
	return s.replace(/[^a-z]/g,"").split("").reverse().join("")
}
