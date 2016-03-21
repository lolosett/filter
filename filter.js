var myArray = [1,2,3,4];

var isEven = function(num){
    //using ternary conditional, if true, return numbers. if not return false.
    return (num % 2 === 0)? num: false; 
}

var filter = function(collection, callback){
    var evenArray = [];
    for (var i=0; i<collection.length; i++){
        //invoking callback 
        var num = callback(collection[i]);
        //callback invoked. if the number is returned, add value onto the end of the new array
        if (num){
            evenArray.push(num);
        }
    }
    return evenArray;
}


var map = function(collection, callback){
    var newArray = [];
    for(var i=0; i<collection.length; i++){
        newArray.push(callback(collection[i]))
    }
    return newArray;
}

var timesTwo = function(num){
    return num*2
};

//assign invoked filter function to new variable to use as collection argument in map function
var filteredData = filter(myArray, isEven);
map(filteredData, timesTwo);