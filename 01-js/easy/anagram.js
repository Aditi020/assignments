/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  const A1 = s1.split('').sort().join('');
  const A2 = s2.split('').sort().join('');
  return A1 == A2;
}

module.exports = isAnagram("any", "nay");


// if (isAnagram("art", "tra"))
//   console.log("True");