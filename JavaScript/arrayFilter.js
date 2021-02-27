var arr = [3, 5, 2, 6, 10, 27, 18, 4]
arr = arr.sort(function(a, b){ return a - b });
//after sorting
console.log("Sorted arr = " + arr);

arr = arr.map(item => item*10);
//after multiplying
console.log("Ten Folded arr = " + arr);

arr = arr.filter(item => item%3 == 0);
//after filtering   
console.log("Multiples of 3 arr = " + arr)

//Output
// Sorted arr = 2,3,4,5,6,10,18,27
// array_filter.js:4
// Ten Folded arr = 20,30,40,50,60,100,180,270
// array_filter.js:8
// Multiples of 3 arr = 30,60,180,270
