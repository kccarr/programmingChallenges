
// 345. Reverse Vowels of a String
//
// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
// 
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var reverse = s.split("");

    var vowels = reverse.filter(a => ["a","e","i","o","u","A","E","I","O","U"].includes(a)).reverse();

    var consonantStr = reverse.map(a => {
        if(["a","e","i","o","u", "A","E","I","O","U"].includes(a)) {
            return "";
        } else {
            return a;
        }
    });

    var counter = 0;
    var finArr = [];
    for (var j = 0; j < consonantStr.length; j++) {
        if(consonantStr[j] === "") {
            finArr.push(vowels[counter]);
            counter++;
        } else {
            finArr.push(consonantStr[j]);
        }
    }

    return finArr.join("");


};
