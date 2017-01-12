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
