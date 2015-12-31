/*
After finishing your last CodeFight of 2015 you suddenly realize: the New Year is almost here! To share your excitement, you want to send a New Year's wish to the community.

You think your message should look nice, so you decide to put it into a frame of asterisks ('*'), with each word on a separate line.

Write a function that returns a framed wish as an array of strings, where each string is a word of the wish (including any punctuation marks that might come right after it) with some spaces added to make the frame rectangular. Note that there should be exactly 1 whitespace character (' ') before each word, and at least 1 after.
*/
function happyNewYear(w) {
  c = w.split(' ')
  i = 0
  for(a in c){
    y = c[a].length
    i = y > i ? y : i
  }
  t = []
  s = Array(i+5).join('*')
  t.push(s)
  for(a in c)
  t.push('* '+ c[a] + Array(i-c[a].length+2).join(' ') + '*')
  t.push(s)
  return t
}
