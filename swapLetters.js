/*
Your task is to swap cases of the letters in the given string, i.e. convert lowercase letters to uppercase and vice versa.

Example

SC("54236cdsckjbjk!#AADC") = "54236CDSCKJBJK!#aadc"
*/
function SC(s) {
  i = 0
  c=''
  while(d = s[i]){
    c += d.match("[a-z]") ? d.toUpperCase() : d.toLowerCase()
    i++
  }
  return c
}
