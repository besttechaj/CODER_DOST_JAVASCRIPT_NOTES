console.log('Javascript important topics based notes');

//VARIABLES --> var, let, const

// DATATYPES (7) --> string, boolean, null, Object, Undefined, Number, Symbol, Bigint, Arrays

/* 

STRING  

String concatenation ways :
a) + Operator
b) template literal --> `dffsfs ${expression}`

Getting string character :
let fullName = 'Mitchell';
console.log(fullName[2]);

String based Methods:
a) toLowerCase()
b) toUpperCase()
c) indexOf()
d) trim()
e) lastIndexOf()  -1 for wrong result
f) includes() return true or false
h) slice()
i) split()
j) typeOf()


Strings are Immutables in JavaScript

Mathematical Operators : + - / % * **
/ --> return Quotient
% --> return Remainder
+ --> Add 
- --> Subtract
* --> Multiplication
** --> Power

hard calculation steps :
2 * 3 + (4 / 2) - 8 / 2 % 4
step 1 --> go for () Brackets
step 2 --> check ** power operator  
step 3 --> * / % ( From Left To Right)priority
step 4 --> + - ( From Left To Right)priority

Javascript is a weekly typed language due to case sensitive  because while adding string with number, it return the string data type ie implicitly converts number to string
*/

/*
LOOSE EQUALITY (==) Vs STRICT EQUALITY OPERATOR (===)
"==" ---> only compares the values not the datatype
"===" ---> compares both values and their datatypes

TYPE CONVERSION
a) Number method :convert to number --> Number(Targeted_string)

B) String Method : convert number to string --> String(Targeted_Number)
Imp note : In number method String must be of Numeric Value else it will throw Nan Error(Not a NUmber)
example 
let stringType = String(numberType) // string 
let stringType = String(anything_except_number) // Nan error

c) Boolean Method : Convert number to true or false 
true ---> Any non zero numbers 
false ---> Empty string
let BooleanValueConverter = Boolean(28)// true
let BooleanValueConverter = Boolean('emptyString ie no value present')// false
*/

/*
ARRAYS

note** : no method can modify the original array instead it will return a new copy

To declare an Empty Array : let numbers = []
To access an array : arrayName[element_location]
To modify an array : 
arrayName[element_location] = 'set_new_Value'

Array Methods :
a) join(condition) -> returns string
b) indexOf(arrayName.indexOf("Element_Name")) case Sensitive  ---> NON MUTATING METHOD example
c) concat() -> two arrays : oldArray.concat(newArray)
d) length() --> arrayName.length
e) push() --> arrayName.push('newItem') : add at the end   ----> MUTATING METHOD EXAMPLE ( Changes the original array)
f) pop() --> arrayName.pop() : to remove last element

*/

/*
METHODS THAT RETURN BOOLEAN VALUES
a) includes()
b) Comparison Operator always return boolean values ( ==, ===, !=, <, >, <=, >=, !==)
*/

/*
CONTROL FLOW : Runs the specific task n number of times

a) for loop : mainly use to retrieve data from an array
let dishes = ['biryani, 'paneer', 'samosa', 'chicken'];

for (let i=0  ; i < dishes.length; i++){
  console.log(dishes[i]);
}


b) while loop
let dishes = ['biryani, 'paneer', 'samosa', 'chicken'];
let i=0
while(i<dishes.length){
  console.length(dishes[i]);
  i++;
}

c) do while loop

let j = 1;

do{
  console.log('at least run time = ', j );
}while(j<=1) //condition false already
*/

/*
CONDITIONAL STATEMENT

a)if else
b) else if 

c) nested-if statement
let number = 23 
if(number>23){
  console.log('outer condition is satisfied');
  if(number>21){
    console.log('Inner condition is satisfied');
  } 
}

BREAK AND CONTINUE STATEMENT
continue --> used to skip some values of the loop

for(let i =0; i<10; i++){
  if(i==2){
    continue;//this will skip 2 
  }console.log(i);  
}

break --> used to terminate the loop and control transfer from outside of the loop

for(let i =0; i<10; i++){
  if(i==5){
    break;//this will terminate the loop while i becomes 5
  }console.log(i);  
}
console.log('this is the outer function');

LOGICAL OPERATORS 
a) AND &&  b) or || c) NOT !=
 */

/*
VARIABLES AND BLOCK SCOPE

scope --> area where variable is defined or accessible

let score = 200; // GLOBAL VARIABLE since it is not written inside any block of code

if(true){
  let score = 50; //BLOCK SCOPE
  console.log(score); 50
}
console.log(score); 200


TERNARY OPERATOR --> updated version of if else conditional statement  (condition?"matched_result":"matched_result")

SWITCH CASE 

let age =17;
switch(age){
  case 15:
     statement
     break;
  case 16:
     statement
     break;
  case 17:
     statement
     break;
  case 18:
    statement
  Default:
    statement
}
*/

/*

FUNCTION :

Truthy vs Falsy Values in JavaScript
JavaScript has a unique sense of true and false, called truthy and falsy. Truthy and falsy are used when evaluating decision-criteria that aren't clearly true or false. Let's look at some examples.

let guess = false;
if (guess) { … } // falsy
As you would expect, a variable set to false is falsy. The code within the if block is not executed.

let guess = 0;
if (guess) { … } // falsy
A value of 0 (zero) is also falsy.

let guess = "";
if (guess) { … } // falsy
And "", which is an empty string, is falsy.

let guess;		// undefined
if (guess) { … } // falsy
If a variable has not been assigned a value, it is undefined. An undefined variable is falsy. A common coding pattern is to ensure a variable has a value before doing something with that variable using an if statement as shown above.

let guess = null;
if (guess) { … } // falsy
A null variable is also falsy.

let guess = Number("four"); // NaN
if (guess) { … } // falsy
And if the code attempts to convert a value that is not a number to a number, the result is NaN, which stands for "not a number". Variables that are NaN evaluate to falsy.

Any other values are truthy.

let guess = 4;
if (guess) { … } // truthy

guess = 'four';
if (guess) { … } // truthy
In the first example, the variable is set to a non-zero number, so it is truthy. In the second example, the variable is set to a non-empty string, so it is truthy.

Basically, if the variable value is false, zero, empty, null, undefined, or Nan, it's falsy and the code within the if block is not run.

If the variable value is anything else, such as a number that is not zero, a non-empty string, an array, or an object, it's truthy and the code in the if block is run.

falsy values are : false, 0, "", undefined, null
truthy values are : true, 11, "a", "0", [], {}

*/

/* 
FUNCTION : It is block of code used to perform some specific task given by the programmer.

Function declaration 
function function_Name(){
  statement///
}

Function Call
function_Call()


Function Expression or ANONYMoUS FUNCTION or Callback function: Passing function to a variable. Also a function without a name
let fun = function(){
  statement///
}
calling function expression or anonymous function
fun()


FUNCTION that return a value .... taking an example of age calculation function
let ageCalculation = function(birth_year, current_year){
  return current_year - birth_year;
}
let result = ageCalculation(1997, 2023);
console.log(result)

ARROW FUNCTION (ES6):  ************************************* IMPORTANT
a) Allows to write function more fast
b) No need to use 'function' keyword
c) No need to use parenthesis() in case of single parameter 
D) No need to use {} brackets if single line code in function
NOTE: WHILE WRITING {} THEN RETURN statement is mandatory to declare.
e) No need to use return statement if single line code in function

Example ---> 

let invitation = function (name){
  console.log(`Welcome ${name} to this event`);
}
invitation('coders');

writing the above function using arrow function
let invitation = name =>`Welcome ${name} to this event`;
console.log(invitation('coders'));


HIGHER ORDER FUNCTION ( passing function as an argument ) : Functions which contain other 
function to do some task
a) other function can be argument
(Callback function)
b) other function can be inner 
return value (closure)

CALLBACK FUNCTION 
let upperCase = (str) => str.toUpperCase();
let lowerCase = (str) => str.toLowerCase();
now passing the function as an argument
let transformer = (str, select_function) => {
  return select_function(str);
};
console.log(transformer('hello', upperCase));
console.log(transformer('BYE', lowerCase));

CLOSURE
FUNCTION returning another function:
let compliment = function (msg) {
  return function (name) {
    console.log(`${msg}, ${name}`);
    return 'samjla ka';
  };
};
let result = compliment('Good Morning');
console.log(result('Ajay'));

IIMF ( IMMEDIATELY INVOKED FUNCTION EXPRESSION ): function without name ,runs immediately
now this is expression
(function(name){
  console.log('This function will never execute again',name);
})
('IIFE');


SET TIMEOUT AND SET INTERVAL FUNCTION : 
setTimeOut --> run function "once" after "interval" of time
setTimeOut(Function|Code, delay in ms, argument)
function greeting(name) {
  console.log(`Good Morning, ${name} Sir`);
}
setTimeout(greeting, 7000,"Ajay"); runs only once

setInterval  --> run function repeatedly, starting after the interval of time, then repeating...
setInterval(Function|Code, delay in ms, argument)
function greeting(name) {
  console.log(`Good Morning, ${name} Sir`);
}
setInterval(greeting, 3000,"Ajay"); runs after after interval of time


HOISTING***************** IMPORTANT

In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Example 1 gives the same result as Example 2:


Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

The let and const Keywords
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:

Example
This will result in a ReferenceError:
carName = "Volvo";
let carName;
Using a const variable before it is declared, is a syntax error, so the code will simply not run.

Example
This code will not run.

carName = "Volvo";
const carName;

Hoisting is allowed for var variable but not for let and const variables.

JavaScript only hoists declarations, not initializations.
JavaScript Initializations are Not Hoisted

Hoisting is allowed in functions
test() calling a function before it is declared
function test(){
  console.log('This is a test function);
}

Function expression or arrow function are not allowed for hoisting. for example
test()
let test = ()=>{
  console.log('this function expression is not allowed for hoisting');
}

NOTE :JavaScript in strict mode does not allow variables to be used if they are not declared.

*/

/*
OBJECTS

syntax
let variable_name = {
  key:"value",
  key:"value",
  key:"value",
}

let car = {
  color:"black",
  model:2022,
  company:"honda"
}

To retrieve data from object --->
console.log( car [ 'color'] ); Traditional way
console.log( car.color ); Generally used method
let propertyName = "color";
console.log(car[propertyName]);

Modify the object --->
car.color = 'orange';
car['color']='orange';

Delete properties of an object
delete car.color;
delete car['color'];

difference between function and method : In javascript when  function is present inside an object is called method
let person = {
  ageCalculate : function(birthYear, CurrentYear){
    return currentYear - birthYear;
  }
}
console.log(person.ageCalculate(1998, 2023));


THIS KEYWORD ******* IMPORTANT : 
In each method we have an ACCESS of special keyword called 'THIS' keyword.
This keyword represent the current object

let person = {
  firstName = "prashant",
  lastName = "mishra",
  city = "faridpur",
  birthyear = 2000,
  Education = "electrical engineer",
  getSummary = function(){
    return `${this.firstName} ${this.lastName} lived in ${this.city}. He is ${this.Education} and his birthyear is ${this.birthyear}`
  } 
}
console.log(person.getSummary());
*/
/*
Some array's method:
a)forEach Method of an array : another type of loop which we used to traverse over the array
let dishes = ['biryani', 'chole', 'paneer', 'rajma'];
passing function as a parameter ( ie call back function )
dishes.forEach((element) => console.log(element));

OBJECT INSIDE ARRAY :
let blocklist=[ {userName:"abhishek", reason:"abusive content"}, {userName:"tako", reason:"piracy"} ]
To retrieve all data 
console.log(blocklist);
To retrieve only the specific data 
for(i=0;i<blocklist.length;i++){
  console.log(`${blocklist[i].name} is blocked due to ${blocklist[i].reason} as reason`);
}

MATH Object built in object in javascript
console.log(Math); display all properties present inside math()
Math.round(number); gives the nearest value after rounding off
Math.floor(number); gives the nearest lowest value after rounding off
Math.ceil(number); gives the nearest highest value after rounding off
Math.trunc(decimalValue); removes the decimal part
Math.random(); gives random number
*/

/*
FUNCTION
CALL AND APPLY METHOD
we can manually set the value of "this" keyword using call and apply method 
('use strict');
let mainPlane = {
  airline: 'flyIndia',
  iatacode: 'FI',
  booking: [],
  book: function (flightNo, passengerName) {
    console.log(
      `${passengerName} Booked flight on ${this.airline} with flight number ${this.iatacode} ${flightNo}`
    );
    //updating the flight booking information
    this.booking.push({
      flightName: `${this.airline}`,
      name: `${passengerName}`,
      flightNumber: `${this.iatacode}-${flightNo}`,
    });
  },
};

mainPlane.book(121, 'abhishek sharma');
mainPlane.book(134, 'AKASH SINGH KUNTAL');
console.log(mainPlane.booking);
// suppose new airline launched of the same group...
let childPlain = {
  airline: 'child plane',
  iatacode: 'CP',
  booking: [],
  //here we want to use the same method similar to previous book method without declaring it here ( solution ---> go with call() method )
};
let book = mainPlane.book;
// book(444,"LURIE");// book is a regular function
//"this" keyword value is "undefined" at least in strict mode

//solution using call method
// call(target_object, para@, para@)
book.call(childPlain, 777, 'LENARD ELPISTONE');
console.log(childPlain);
//apply method ---> works same but has to put the value inside array
book.apply(childPlain, [555, 'RAYMOND TAILOR']);
console.log(childPlain);
 */
