/**
 * Given an integer x, return true if x is a 
  palindrome
, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = x.toString().split("").reverse().join("");
  return +reverse === +x;
};

console.log(isPalindrome(121));
