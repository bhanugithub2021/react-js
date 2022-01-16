// Show Array Element
// var friends = ["alok", "akash", "aman"];
// console.log(friends[friends.length - 1]);


// Show Length of Array


// var friends = ["alok", "akash", "aman"];
// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// For In Loop (show the index no of array using For In Loop)

// var friends = ["alok", "akash", "aman", "aasu"];
// for (let elements in friends) {
//     console.log(elements);
// }


// For Of Loop (show the Total Element of array using For Of Loop)

// var friends = ["alok", "akash", "aman", "aasu"];
// for (let elements of friends) {
//     console.log(elements);
// }


// Array.prototype.ForEach()
// Calls a function for each element in the array.

// var friends = ["alok", "akash", "aman", "aasu"];
// friends.forEach(function (element, index, array) {
//     console.log(element)
// })



// "use strict";
// var a = [8, 8, 8, 8, 8, 8, 8,]
// var a = 66
// var a = 63

// console.log(a);


// ----------------------------------------------------------------------------------------------------------


// var friends = ["alok", "akash", "aman", "aasu"]

//Filter() Method
//Filter() Method is return new array

// const ages = [12, 33, 16, 40];

// var b = ages.filter(checkChild);
// console.log(b)
// function checkChild(age) {
//     return age <= 18;
// }

//reduce() method

// let arr = [1, 2, 3, 4, 5, 8]
// let sum = arr.reduce((accum, curr) => {
//     return accum + curr;
// }, 5)
// console.log(sum)

//Slice method
// let arr = [1, 2, 3, 4, 5, 8]
// let b = arr.slice(2, 4);
// console.log(b)


//Splice method
// let arr = [1, 2, 3, 4, 5, 8]
// arr.splice(3, 2, "ram", "shyam");
// console.log(arr)


//Map() method
// const oldarr = ["akash", "alok", "aman", "chela"];
// const newarr = oldarr.map(function (cvalue, index) {
//     // console.log(arr)
//     return index + ":" + cvalue;
// });
// console.log(newarr)

//2nd Example of map() Method
// const sdata = [
//     { id: 1, Name: "Akash", Degree: "B.Tech" },
//     { id: 2, Name: "Ashok", Degree: "B.IT" },
//     { id: 3, Name: "Aman", Degree: "B.Pharma" },
//     { id: 4, Name: "Alok", Degree: "B.Sc" },


// ];

// const newdata = sdata.map((value) => {
//     return `He is ${value.Name} And His Degree is ${value.Degree}`
// }
// );
// console.log(newdata)



//math.round()method
// let a = Math.round(2.40);
// let b = Math.round(2.60);
// console.log("a:" + a + " " + "b:" + b)



// var friends = ["alok", "akash", "aman", "aasu"]
// console.log(friends.toString)


// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting)


//comparision of two value in array..

var array1 = ["cat", 12, "fun", "run"];
var array2 = ["bat", "cat", 12, "sun", "hut", "gut"];

const intersection = array1.filter(element =>
    array2.includes(element));

console.log(intersection);



//bind() Method..

var geeks = {
    name: "ABC",
    printFunc: function () {
        console.log(this.name);
    }
}

var printFunc2 = geeks.printFunc.bind(geeks);
//using bind()
// bind() takes the object "geeks" as parameter//
printFunc2();




//Promises...

var promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks1"
    if (x == y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });





// add() function is called with arguments a, b
// and callback, callback will be executed just 
// after ending of add() function
function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
    callback();
}

// disp() function is called just
// after the ending of add() function 
function disp() {
    console.log('This must be printed after addition');
}

// Calling add() function
add(5, 6, disp);
