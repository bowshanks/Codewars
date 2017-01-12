// Highest and Lowest
// Description:
//
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Notes:
//
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
  numbers = numbers.split(' ').sort(function(a,b){return a-b})
  return numbers[numbers.length-1] + ' ' + numbers[0]
}

// Emily's Eccentric Encoding
// Description:
//
// Emily believes that her bosses may be spying on her communications at work. This is not good because Emily is applying for new jobs and she doesn't want her bosses to know. To try and deceive the eavesdropping company, she has devised an encoding scheme with the recruiter to encode all of their communication.
//
// The encoding replaces all lower case letters in a string with the opposite letter in the alphabet. In other words: a -> z, b -> y, c -> x, d -> w, etc. All other characters remain the same. The two parties have agreed on the encoding and they have generated encoded messages like:
//
// "I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!"
// which decodes to:
//
// "I would like to interview on Monday morning!"
// Your job is to write a method called decode that takes an encoded string as input and returns the decoded string as output.
function decode(str) {
  return str.split('').map(function(currentValue,index){
    if (currentValue.charCodeAt(0)-96 > 0 && currentValue.charCodeAt(0)-96 < 27) {
        currentValue = String.fromCharCode(((currentValue.charCodeAt(0) -96 -27) * -1)+ 96)
      }
    return currentValue

  }).join('')
}


// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #32:
// Count with your fingers
//
// Description
//
// John's each hand has five fingers(If you are surprised, please tell me how many fingers you have ;-) Even more amazing is that when he was a child, he already had 5 fingers(one hand). At that time, he often to count the number by using his fingers.
// He counting number by this way:
// a--Thumb b--Index finger c--Middle finger
// d--Ring finger e--Little finger
//
//       a  b  c  d  e
//       H  H  H  H  H
//       H  H  H  H  H
//       U  H  H  H  H
//          U  H  U  U
//             U
//
//       1  2  3  4  5
//       9  8  7  6
//         10 11 12 13
//      17 16 15 14
//         18 19 .. ..
//      .. .. .. .. ..
// So the question is: when John counting to number n, which is the corresponding finger?
//
// Task
//
// Complete function whichFinger() that accepts an argument n
// You need to return a string between the name of five fingers:
//
// "Thumb", "Index finger", "Middle finger",
// "Ring finger", "Little finger"
function whichFinger(n){
  var hand = ['Thumb','Index finger','Middle finger','Ring finger','Little finger']
  while (n > 5) {
    n -= 4;
    hand = hand.reverse();
  }
  return hand[n - 1];
}

// Calculate Meal Total
// Description:
//
// Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.
//
// You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
function calculate_total(subtotal, tax, tip) {
  return Number((subtotal + (subtotal * ((tip + tax) * .01))).toFixed(2))
}


// Sum of a sequence
// Description:
//
// Your task is to make function, which returns the sum of a sequence of integers.
//
// The sequence is defined by 3 non-negative values: begin, end, step.
//
// If begin value is greater than the end, function should returns 0
const sequenceSum = (begin, end, step) => {
  var x = 0;
  while (begin <= end) {
    x = x + begin;
    begin = begin + step;
  }
  return x;
};


// Currying functions: multiply all elements in an array
// Description:
//
// To complete this Kata you need to make a function multiplyAll which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
//
// The returned array should consist of each of the elements from the first array multiplied by the integer.
function multiplyAll(array){
  return function(multiple) {
    return array.map(function(currentValue){
      return currentValue * multiple
    })
  }
}


// Tail Swap
// Description:
//
// You'll be given a list of two strings, and each will contain exactly one colon in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
// Python
function tailSwap(arr) {
  return [arr[0].substring(0,arr[0].indexOf(':'))+
  arr[1].substring(arr[1].indexOf(':'),arr[1].length),
  arr[1].substring(0,arr[1].indexOf(':'))+
  arr[0].substring(arr[0].indexOf(':'),arr[0].length)]
}


// Simple beads count
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
//
// @ @@ @ @@ @ @@ @ @@ @ @@ @
//
// Implement count_red_beads(N_blue) (in PHP count_red_beads($n); in Javascript countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.
function countRedBeads(n) {
  return n <= 0 ? 0:(n - 1) * 2
}



// String reverse slicing 101
// Description:
//
// You'll be given a string of characters as an input.
//
// Create a function reverse_slice/reverseSlice that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.
// For example:
//
// '123'  becomes  ['321','21','1']
// and
//
// 'abcde'  becomes  ['edcba','dcba','cba', 'ba', 'a']
// Try to do this using slices and avoid converting the string to a list.
function reverseSlice(str) {
  var final = [];
  for (var i = str.length;i > 0; i--) {
    final.push(str.substring(0,i).split('').reverse().join(''));
  }
  return final;
}

//
// All Star Code Challenge #24
// Description:
//
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #24
//
// Your friend David is an architect who is working on a triangle-focused design. He needs a quick way for knowing the measurement of a right triangle's side, only knowing two of the sides.
//
// He knows about the Pythagorean Theorem, but is too lazy to do the math. Help him by making 2 functions to ease his troubles.
//
// Create 2 functions:
//
// 1) hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.
//
// 2) leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.
function hypotenuse(a, b){
return Math.sqrt((a*a) + (b*b))

}

function leg(c, a){
  return Math.sqrt((c*c) - (a*a))

}
