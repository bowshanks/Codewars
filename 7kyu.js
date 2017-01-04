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
