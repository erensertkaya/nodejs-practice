// Differences between var let and const
/*
var x = "its variable";
let y = "that is also a variable";

for (var a = 0; a < 10; a++) {
    // you can access a variable from the out of loop
}

for (let b = 0; b < 10; b++) {
    // you cannot access b variable from the out of loop,
    // because of let statement which comes with es6
}
console.log(a);
console.log(b);
*/

/*
const pi = 3;
pi = 3.14;
console.log(pi);
//if its constant, you cannot re-declare a variable with same name
//but you can push something if your variable is a array or object
*/

//Template Literal

/*
const name = "eren";
const surname = "sertkaya";
console.log(`my name is ${name} and my surname is ${surname}`);
*/

//Destructing
/*
const x = [1,2,3];
const [a,b,c] = x;
console.log(a);
console.log(b);
console.log(c);
*/

/*
const x = {
    a: 1,
    b: 2,
    c: {
        ca: 3
    }
};
const {c: {ca: name}} = x;
console.log(name);
*/

//Spread Operator and Rest Operator
/*
...
rest
 */

//Arrow Functions
//Classical Js Function
/*
var myFunction = function (number,number2) {
    return number+number2;
}
console.log(myFunction(2,3));

//ES6 Function
const myFunctionEs6 = (number,number2) => number+number2;
console.log(myFunctionEs6(3,3));
*/

//Promise Structure

//Hell function instance with old js syntax

/*
var hell = function (number, callback) {
    var result = number + 2;
    callback(result);
}

hell(2, function (result) {
    console.log(result);
    hell(4, function (result) {
        console.log(result);
        hell(6, function (result) {
            console.log(result);
        })
    })
});*/

//Same instance with promise structure which is feature of ec6

/*
const hell = (number) => {
    return new Promise((resolve, reject) => {
            if (number === 4)
                resolve("everything is okey");
            else
                reject("there is a problem");
        }
    )
}

hell(4)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        return console.log(data);
    })
*/

/*

const a = 4;
const hellFunction = () => {
    return new Promise((resolve, reject) => {
        if (a === 4) {
            let b = a+2;
            console.log(b);
            resolve(b);
        }
        else
            reject(a);
    })
}

hellFunction().then((data) => {
    return data;
}).then((x) => {
    let y = x+2;
    console.log(y);
}).catch((z) => {
    console.log(z);
})
*/









