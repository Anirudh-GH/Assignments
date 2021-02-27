var add = (function() {
    var counter = 1;
    return function() {
        counter += 1;
        console.log(counter);
        return counter;
    }
})();

add(); 
add(); 
add();
add();

//output
// 2
// 3
// 4
// 5