///concat()
var list1 = [1, 2, 3, 4];
var list2 = [5, 6, 7, 8];
var list = list1.concat(list2);
console.log("Concated list = " + list);

//every()
console.log(list.every((item) => {
    return (item%2==0)?true:false;
}));

//filter()
var filteredList = list.filter(item => item%3==0)
console.log(filteredList)

//forEach
list.forEach(item => console.log(item*item));

//indexOf
console.log(list.indexOf(3));
console.log(list.indexOf(10));

//join()
console.log(list.join(' '));

//lastIndex()
console.log(list.lastIndexOf(2));

//map()
var tenfolded = list.map(item => item*10);
console.log(tenfolded);

//pop()
console.log(list.pop());
console.log("pop "+list);

//push()
list.push(8);
console.log("pushed "+list);

//reduce()
var subLeft = list.reduce((a, b) => a-b);
console.log("subleft "+subLeft);

//reduceRight()
var subRight = list.reduceRight((a, b) => a-b);
console.log("subRight "+subRight);


//reverse()
list = [1, 2, 3, 4, 5, 6, 7, 8]
var rev = list.reverse();
console.log(rev);
//slice
console.log(list.slice(2, 4));

//shift
console.log(list.shift());

//some
console.log(list.some(item => item%2==0));

//sort()
list = [2, 1, 4, 3, 6, 5, 7, 8];
var sortedList = list.sort();
console.log(sortedList);


