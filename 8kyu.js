//Write function avg which calaculates average of numbers in given list.
function find_average(array) {
  return array.reduce(function(total,currentValue){
    return total + currentValue
  })/array.length
}

// Holiday VIII - Duty Free
// Description:
//
// The purpoe of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
//
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * (discount * .01)))
}


// I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  while (nbPetals >6 ){
    nbPetals-= 6
  }
    switch(nbPetals) {
      case (1):
        return 'I love you';
      case (2):
        return 'a little';
      case (3):
        return 'a lot';
      case (4):
        return 'passionately';
      case (5):
        return 'madly';
      case (6):
        return 'not at all';
    }
}

// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
// Are they opposite?
//
// Task
//
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.
// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string
function isOpposite(s1,s2){
  return s1 == '' || s1.length != s2.length ? false:!(s1.split('').map(function(currentValue,index){
    return(currentValue.search(/[A-Z]/) !==
        s2.charAt(index).search(/[A-Z]/)
        && currentValue.toLowerCase() === s2.charAt(index).toLowerCase())
  }).indexOf(false)+1);
}

// Exclamation marks series #1: Remove a exclamation mark from the end of string
// Description:
//
// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(s){
  if (s.search(/!$/) >= 0)
  {
    s = s.substr(0,s.length -1)
  }

  return s;
}

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// Description:
//
// Remove all exclamation marks from the end of sentence.
function remove(s){
  while (s.search(/!$/) >= 0)
  {
    s = s.substr(0,s.length -1)
  }

  return s;
}


// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// Description:
//
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
function remove(s){
  return s.replace(/!/g,'')+'!'
}


// Count of positives / sum of negatives
// Description:
//
// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
function countPositivesSumNegatives(input) {
  var sum = [];
  if (input) {
    input.map(function(currentValue){
      if(currentValue > 0) {
        sum[0] = (sum[0] || 0) + 1
      }
      if(currentValue < 0) {
        sum[1] = (sum[1] || 0) + currentValue
      }
    });
    if (sum[0] && !sum[1]){ sum[1] = 0}
  }
  return sum;
}

// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  };


// Sum without highest and lowest number
// Description:
// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// If array is empty, null or None, or if only 1 Element exists, return 0.
function sumArray(array) {
  if (!array || !array.length || array.length < 3) {
    return 0;
  }
  else return !array.length ? 0:array.sort(function(a, b){return a-b}).slice(1,array.length-1).reduce(function(finalValue,currentValue){return finalValue + currentValue})
}
