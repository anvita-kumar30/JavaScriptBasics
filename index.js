// 1. Ways to print in JS
//console.log("Hello World");
//alert("me");
//document.write("This is document write");

// 2. JavaScript console API
//console.log("Hello World", 4 + 6, "Another log");
//console.warn("This is a warning");
//console.error("This is an error");
//console.clear();
//console.assert(4==6);  //Assertion failed

// 3. JS Variables
//Containers to store data values

/*
multi
line
comment
*/

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in JS
//Numbers
var num1 = 455;
var num2 = 56.6;
//String
var str1 = "This is a string";
var str2 = 'This is a string';
//Booleans
var a = true;
var b = false;
//Undefined
//var und = undefined;
var und;
//Null
var n = null;
//Array
var arr = [1,2,3,"bb",4,5];
//Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

/*At a very high level, there are two types of datatypes in JS
1. Proimitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

console.log(num1);
console.log(num2);
console.log(str1);
console.log(str2);
console.log(a,b);
console.log(und);
console.log(n);
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(marks);

// 5. Operators in Js
//Arithmetic Operators
var a1 = 100;
var b1 = 10;
console.log("The value of a + b is ", a1+b1);
console.log("The value of a - b is ", a1-b1);
console.log("The value of a * b is ", a1*b1);
console.log("The value of a / b is ", a1/b1);
//Assignment Operators
var c = b1;
c += 2;
console.log(c);
//Comparison Operators
var x = 34;
var y = 56;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);
//Logical Operators
console.log(true && true);
console.log(true || true);
console.log(!false);
console.log(!true);

console.clear();

// 6. Functions in JS
//DRY = Do not repeat yourself
function avg(a, b){
    c = (a + b)/2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14,16);
console.log(c1, c2);

// 7. Conditionals in JS
var age = 34;
if (age > 8){
    console.log('You are not a kid');
}
else if (age > 32){
    console.log("Bacche nhi rahe");
}
else{
    console.log('You are a kid');
}

// 8. Loops in JS
var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i=0; i<arr.length; i++){
    if(i==2){
        //break;
        continue;
    }
    console.log(arr[i]);
}

// arr.forEach(function(element){
//     console.log(element);
// })

//const ac = 0;
//ac = ac + 1;  //error
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// 9. Array Methods
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.pop();
//myArr.push("anvita");
myArr.shift();
//myArr.unshift("anvita");
console.log(myArr.unshift("anvita"));  //gives length
//myArr.toString();
console.log(myArr);
let myArr2 = [1,4,3,2,6];
myArr2.sort();
console.log(myArr2);

// 10. String Methods
let myStr = "Anvita is a good girl is is"
console.log(myStr);
console.log(myStr.length);
console.log(myStr.indexOf("is"));
console.log(myStr.lastIndexOf("is"));
console.log(myStr.slice(0,3));
d = myStr.replace("Anvita", "Rohan");
d = d.replace("good", "bad");
console.log(d, myStr);

// 11. Dates in JS
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// 12. JS DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);
let elemclass = document.getElementsByClassName('container');
console.log(elemclass);
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
//elemclass[0].classList.remove("text-success");
//document.getElementById('click').style.border = '2px solid blue';

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element);