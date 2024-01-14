/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();
  if (s1.length == s2.length) {
    let A1 = s1.split('').sort().join('');
    let A2 = s2.split('').sort().join('');

    if (A1 == A2)
      return true;
    else
      return false;
  }
  else
    return false;
}
module.exports = isAnagram("str1", "str2");


// console.log((isAnagram('openai!', 'open')))
