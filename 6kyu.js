// Begin your day with a challenge, but an easy one.
// Description:
//
// There are no explanations. You have to create the code that gives the following results
//
// oneTwoThree(0) ---> ['0', '0']
// oneTwoThree(1) ---> ['1', '1']
// oneTwoThree(3) ---> ['3', '111']
// oneTwoThree(19) ---> ['991', '1111111111111111111']
function oneTwoThree(n) {
    var first = '';
    var times = Math.floor(n/9)
    var holder = n - (9 * times)
    for (times;times > 0; times--){
      first = first + '9';
    }
    first = first + (holder ? holder:'')

    var second = '';
    for (var i = 0; i < n; i++) {
      second = second + '1'
    }
    first = n<1 ? '0':first;
    second = n<1 ? '0':second;
    return [first, second];
}

// Minutes to Midnight
// Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.
//
// He has a really big passion about programming and he want's to be productive till midnight. He want's to know how many minutes he has left to work on his new project.
// He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.
//
// Can you write him a function, so he can stay productive?
//
// The function
// minutesToMidnight(d)
// will take a date object as parameter. Return the number of minutes in the following format:
//
// "x minute(s)"
//
// You will always get a date object with of today with a random timestamp.
// You have to round the number of minutes.
// Milliseconds doesn't matter!
//
// Some examples:
//
// 10.00 am => "840 minutes"
// 23.59 pm => "1 minute"
function minutesToMidnight(d){
  var minutes = (24 * 60) - ((d.getHours() * 60) + d.getMinutes() + (d.getSeconds() > 30 ? 1:0))
  return minutes + ' minute' + (minutes < 2 ? '':'s')
}

// Mexican capital 's phone number validator
// Validate all numbers to make local calls from the capital city at the Mexican United States.
//
// The first two digits are the lada. Lada can only be 55 or 56 for those Mexico City phone numbers.
//
// The first two digits of the phone numbers when dialed locally are known as lada. To make phone numbers more readable some people write the lada between parenthesis. As you will see in further Katas lada concept is actually deeper than area code.
//
// Example
//
// Valid numbers:
//
// (56) 84 65 52
// (56) 84 6552
// (56) 846552
// (56)846552
// 56 84 65 52
// 56 84 6552
// 56 846552
// 56846552
// 55 95 64 85
// 55 95 6485
// 55 956485
// 55956485
// Non-Valid numbers:
//
// 99956485
// abcdefgh
// (56) 84 6 552

//NEED TO REDO
var stripNonNumeric = function(str) {
  return str.split('').filter(function(currentValue){
    return Number.isInteger(Number(currentValue.replace(' ','x')))
  }).join('')
}

var isValidMXPhoneNumber = function(str) {
  console.log(str);
  str = stripNonNumeric(str);
  return ((str.substring(0,2) == 55 || str.substring(0,2) == 56) && str.length == 8)
};


// Calculate String Rotation
// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second.
//
// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
//
// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
//
// "coffee", "eecoff" => 2
//
// "eecoff", "coffee" => 4
//
// "moose", "Moose" => -1
//
// "isn't", "'tisn" => 2
//
// "Esham", "Esham" => 0
//
// "dog", "god" => -1
function shiftedDiff(first,second){
  first = first.split('');
  second = second.split('');
  var holder;
  for (var i = 0; i < first.length; i++) {
    if (first.join('') == second.join('')) {
      break
    }
    else {
      holder = first.pop();
      first.unshift(holder);
    }
  }
  return first.join('') !== second.join('') ? -1:i
}

// Basic Encryption
// The most basic encryption method is to map a char to another char by a certain math rule. Because every char has an ASCII value, we can manipulate this value with a simple math expression. For example 'a' + 1 would give us 'b', because 'a' value is 97 and 'b' value is 98.
//
// You will need to write a method which does exactly that -
//
// get a string as text and an int as the rule of manipulation, and should return encrypted text. for example:
//
// encrypt("a",1) = "b"
//
// Full ascii table is used on our question (256 chars) - so 0-255 are the valid values.
function cycle(start,n) {
  while (n > 0) {
    start++
    if (start > 255) {
      start = 0
    }
    n--
  }
  return start
};

function encrypt(text, rule) {
  return text.split('').map(function(currentValue){
    var x = cycle(currentValue.charCodeAt(0), rule);
    return String.fromCharCode(x);
  }).join('');
};

// String transformer
// Given a string, return a new string that has transformed based on the input:
//
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// For example:
//
// stringTransformer('Example Input')/string_transformer("Example Input") (depending on the language you are completing the Kata in) should return 'iNPUT eXAMPLE'
//
// You may assume the input only contain English alphabet and spaces.
function stringTransformer(str) {
  return str.split('').map(function(currentValue){
    var x = currentValue.charCodeAt(0);
    if (x == 32){
      x = 0
    }
    return x > 90 ? String.fromCharCode(x - 32) : String.fromCharCode(x + 32);
  }).join('').split(' ').reverse().join(' ')
};

// Get all array elements except those with specified indexes
// Extend the array object with a function to return all elements of that array, except the ones with the indexes passed in the parameter.
//
// For example:
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// // array2 should contain ['a', 'c', 'e'];
// The function should accept both array as parameter but also a single integer, like this:
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// // array2 should contain ['a', 'c', 'd', 'e'];
Array.prototype.except = function(keys)
{
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  return this.filter(function(cV,index){
    return keys.indexOf(index) == -1
  })
}
