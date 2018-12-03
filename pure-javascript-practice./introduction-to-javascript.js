// İntroduction To Javascript
/*
console.log("hello world");
var data = "eren sertkaya";
console.log(data);
console.log(data +" "+1998);
*/

//Multiple Variable Defining
/*
var name = "eren",
    surname = "sertkaya",
    age = 21;
console.log(name,surname,age);
*/

// Aritmetical Operators
/*
var number = 2;
console.log('number'+2);
console.log("number"+2);
console.log(number + 2);
console.log(number * 2);
console.log(number / 2);
console.log(number % 2);
console.log(number++);
console.log(number);
var newNumber = number -= 1;
console.log("Yeni Sayı"+" "+newNumber);
*/

// Comparing Operators
/*
var number = 2;
console.log(number == 2);
console.log(number == "2");
console.log(number === "2");
*/

//Logical Operators
/*
* && and
* || or
console.log(1>4 && 1<0);*/

//Logical Statements
/*
var areYouHungry = true;
if(!areYouHungry) {
    console.log("eat something");
}
else {
    console.log("you dont need eat anything");
}
*/

//Functions
/*
var myFunction = function myFunction () {
return "myFunction is executed by Eren Sertkaya";
}
console.log(myFunction());
console.log(myFunction);
*/

//Callback Functions
/*
function getData(text, callback) {
    callback();
    console.log(text);
}

var setData = function () {
    console.log("data is already setted");
}

getData('Hello', setData);
*/

//Some Of The Default Js Functions Associated With Callback Function Logic
//setTimeOut
/*
setTimeout(function () {
    console.log("Hi!");
}, 5000);
*/

//setInterval
/*
var number = 1;
var interval = setInterval(function () {
    if (number == 10)
    clearInterval(interval);
    console.log("Hi!"+ number);
    number++
},100);
*/

//Example Of Ordinal Execution Process Logic With Callback Functions

/*
function first(callback) {
    setTimeout(function () {
        console.log("first");
        callback(third);
    }, 2000)
}

function second(callback) {
    console.log("second");
    callback();
}

function third() {
    setTimeout(function () {
        console.log("third");
    }, 5000)

}

first(second);
*/

//Scope Concept In Javascript
/*
var x = "this is x variable";

function getX()
{
    var x = "this is x variable which is in getX function scope";
    return x;
}

console.log(x);
console.log(getX());
*/

//For Loop

/*
for (i = 0; i <= 10; i++) {
console.log(i);
}
*/

//While Loop
/*
var situation = true;
var x = 0;
while (situation) {
        console.log(x++)
    if (x>1000)
        break;
}*/

//

//Do While Loop
/*
var k = 1;
do {
    console.log(k);
    k++;
}
while (k<3)
{

}
*/

//Objects İn Javascript

/*
var human = {};
human.age = 21;
human.name = "Eren";
console.log(human.name);
*/

/*
var human = {
    age: 21,
    name: "Eren",
    walk: function () {
        return "walking...";
    }
}
console.log(human);
*/

// Arrays In Javascript
// Read All İndexes Of An Array Example
/*
var Arr = ['eren',21,true,0.5];
var countArr = Arr.length;
for (i = 0; i < countArr ; i++) {
console.log(Arr[i]);
}
*/

// Differences Between Objects And Arrays
/*
var myArray = Array();
var myObject = {};
myArray['name'] = 'eren';
myObject['name'] = 'eren';
myArray.surname = 'sertkaya';
myObject.surname = 'sertkaya';

console.log(myArray)
console.log(myObject)
 */
*/
 */

//forEach Loop
/*
var Arr = ['eren',21,true,0.5];
Arr.forEach(function (x) {
    console.log(x);
})
*/








