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
