/*
Pig Latin is not actually a language but a language game that children (and some adults) use to speak “in code”. Pig Latin words are formed by altering words in English.

Here’s how it works.

If a word starts with a vowel ('a', 'e', 'i', 'o', 'u', or 'y'), just append "way" to the end of the word.

If a word starts with a consonant (a letter that's not a vowel), move all consonants leading up to the first vowel to the end of the word and add an "ay" at the very end.

Given a word, translate it into Pig Latin.

Example:

For word = "amazing" the answer should be "amazingway".
For word = "codefights" the answer should be "odefightscay".
For word = "flywhy" the answer should be "ywhyflay".

[input] string word

A word to be converted into pig-latin. It is guaranteed that it consists of lower-case latin letters only, and there is at least one vowel in it. 3 < word.length < 20.
[output] string

The input word converted into pig-latin.
*/
function piglatin(word) {
var i=0;c="";w=word;
while("aeiouy".indexOf(w[i])==-1){c+=w[i];i++;}
w=(i==0)?w+"way":w.substr(i,w.length)+c+"ay";
return w;
}
