var pattern = /((^lion)|(ab+c)|(cat$))/;

var text1 = "lion is the loneliest animal.";
console.log(pattern.test(text1));

var text2 = "i don't want a cat";
console.log(pattern.test(text2));

var text3 = "dogs are wierd";
console.log(pattern.test(text3));

var text4 = "i want abbbc textbook";
console.log(pattern.test(text4));

//Output:
// true
// true
// false
// true