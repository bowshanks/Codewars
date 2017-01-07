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
