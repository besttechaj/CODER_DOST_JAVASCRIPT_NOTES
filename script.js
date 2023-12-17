// console.log('Javascript important topics based notes');

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


BIND METHOD  : example
function message() {
  console.log(`My full name is ${this.firstName} ${this.lastName}`);
}

let user = {
  firstName: 'john',
  lastName: 'paul',
};

let newMessage = message.bind(user);
newMessage();


OBJECTS/ARRAYS: How "Reference" are passed to variable

let array = [1,2,3,4,5];
creating a ref for the above array. note that reference and original array points to the same memory location hence if change occur in any one, it will affect the other one also.
let getRef = array;
getRef[5]=7 //change the data
getRef.shift() ; //removing the first element
console.log('Original array',array);// [2,3,4,5,7]
console.log('getRef array',getRef);// [2,3,4,5,7]
NOTE : SIMILAR CONCEPT IS APPLIED FOR OBJECT ALSO


PASS BY VALUE : this will create a copy of an array/object
let arr = [1,2,3,4,5];
creating another copy of original array hence it will create a new memory
let getValue = [...arr];
getValue[6]=8; 
console.log('Original array',arr);// [2,3,4,5,7]
console.log('getValue array',getValue);// [2,3,4,5,7,empty,8]   results are different 
NOTE : SIMILAR CONCEPT IS APPLIED FOR OBJECT ALSO
let obj1 = {fname:"john",lname:"paul"};
creating a copy
let obj2 = {...obj1};
obj2[1]="kumar";
if you change in one object then other object will not change


FOR - IN LOOP ( Each iteration return a " key " of object ). for-in loop mainly use for object's key
let car = {
  company: 'Toyota',
  model: 2023,
  color: 'grey',
};
// applying for-in loop to get the key only
for (let key in car) {
  console.log(key); // model color company
}
//applying for-in loop to get the value only
let x = '';
for (let key in car) {
  x = x + car[key];
}
console.log(x);
 */

/*
JavaScript HTML DOM
With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page


What is the DOM?
The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The W3C DOM standard is separated into 3 different parts:

Core DOM - standard model for all document types
XML DOM - standard model for XML documents
HTML DOM - standard model for HTML documents
What is the HTML DOM?
The HTML DOM is a standard object model and programming interface for HTML. It defines:

The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements
In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


GETTING html element/ element using querySelector/ querySelectorAll respectively.

query selector ---> used to "find"(or select) the html elements you want to target/style. 

querySelector are of two types :
querySelector : return first element that match Css selector.
NOTE(CSS SELECTOR--> A CSS selector selects the HTML element(s) you want to style.
We can divide CSS selectors into five categories:

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)
)

// access elements using element name
let result = document.querySelector('p');
console.log(result);
querySelectorAll: To get all the matched elements.
let result2 = document.querySelectorAll('p');
console.log(result2); 
result2.forEach(Element=>console.log(Element));

//access element using class name
let result3 = document.querySelector('.coderdost');
console.log(result3);

//access elements using id name
let result4 = document.querySelector('#coders');
console.log(result4);

//access elements using tagName only
let result5 = document.getElementsByTagName('p');
console.log(result5);

// access element by id method
let result6 = document.getElementById('coders');
console.log(result6);

//access element using by className method
let result7 = document.getElementsByClassName('coderdost');
console.log(result7);


// Updating and changing content *** IMPORTANT PROPERTY

// innerText property :
// a) It ignore spaces while displaying result
// b) Retrieve and set content in plain text
let data = document.querySelector('.content');
console.log(data.innerText);
//updating the content
data.innerText += '<p>Great Coders</p>';
console.log(data.innerText);

//innerHTML property :
// a)it doesn't ignore spaces while displaying the result
// b) Retrieve and set content in html formate
// update the innerHTML format
data.innerHTML += '<h3>Great Coders ..</h3>'; //it will add a new element

GETTING AND SETTING ATTRIBUTE OF ELEMENT
//getting the attribute
let googleLink = document.querySelector('a');
console.log(googleLink); // getting the element
console.log(googleLink.getAttribute('href')); // retrieve link
//setting the attribute
googleLink.setAttribute('href', 'fb.com');
console.log(googleLink.getAttribute('href')); // verifying
googleLink.innerText = 'Master class of React Js'; // updating the inner text
console.log(googleLink.innerHTML);

//Adding the style
let heading = document.querySelector('h1');
heading.style.color = 'red';
heading.style.backgroundColor = 'black';

//Add, Remove and Replace the class of element
let heading = document.querySelector('h1');
heading.classList.add('newClass'); //Adding the class
heading.classList.remove('newClass');
heading.classList.replace('main', 'newClass');

//PARENT, CHILDREN AND SIBLING ELEMENTS
let parentElement = document.querySelector('.content');
console.log(parentElement); // parent element
console.log(parentElement.children); //children
//we cannot run forEach method on HTML collection so first convert it into array
console.log(Array.from(parentElement.children)); // return array
Array.from(parentElement.children).forEach((ele) => {
  ele.classList.add('coders');
  console.log(ele);
});

// trying to get the parent element from child element
let childElement = document.querySelector('h2');
console.log(childElement.parentElement); //using built-in parentElement method


//find next sibling of the child
let childElement = document.querySelector('h2');
console.log(childElement.nextElementSibling); // don't  have next sibling, it was the last

// find the previous/next sibling of any element
let childElement = document.querySelector('h2');
console.log(childElement.previousElementSibling);



//EVENT BASICS ( CLICK EVENT )
let eventElement = document.querySelector('.clickMe'); //targeting the dom's element
eventElement.addEventListener('click', () => console.log('Clicked')); // addEventListener(type_of_event, callBack function)

// TRYING TO RETRIEVING THE ELEMENTS AND APPLYING CLICK EVENT ON EACH ELEMENT OF THE LOOP
let list = document.querySelectorAll('li');
console.log(list);
list.forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.textDecoration = 'line-through';
  });
});


//ADD AND REMOVE THE ELEMENT using event
//Adding a new element while clicking the button
let ul = document.querySelector('ul');
//Also Event bubbling-->The event continues to bubble, until it reaches the top (the document element).
ul.addEventListener('click', () => console.log('Event bubbling'));
let eventElement = document.querySelector('.clickMe'); //targeting the dom's element
eventElement.addEventListener('click', () => {
  //creating a new list
  let li = document.createElement('li');
  //adding a text inside the list
  li.textContent = 'tHIS IS A NEW LI';
  // APPENDING the newly created element in ul
  ul.append(li); // to add at last
  ul.prepend(li); // to add at first
}); // addEventListener(type_of_event, callBack function)

// To remove the element which is clicked inside the list
let list = document.querySelectorAll('li');
console.log(list);
list.forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log('Element remove', e.target);
    e.target.remove();
  });
});




//Event bubbling
//Adding a new element while clicking the button and removing the element while click on them using event bubbling
let ul = document.querySelector('ul');
let eventElement = document.querySelector('.clickMe'); //targeting the dom's element
eventElement.addEventListener('click', () => {
  //creating a new list
  let li = document.createElement('li');
  //adding a text inside the list
  li.textContent = 'tHIS IS A NEW LI';
  // APPENDING the newly created element in ul
  ul.prepend(li); // to add at first
});
//since the bubble event traverse from child to parent we can easily remove any element
ul.addEventListener('click', (e) => {
  console.log(e);
  //nodeName ---> e.target.nodeName (type of property)
  if (e.target.nodeName === 'LI') {
    e.target.remove();
  }
});

*/

/*

COPY EVENT
let copyRightElement = document.querySelector('.test1');
copyRightElement.addEventListener('copy', () =>
  alert('Link cannot be copied due to security reasons')
);

//MOUSE MOVE EVENT INSIDE A SPECIFIED AREA
let mouseLoc = document.querySelector('.box');
mouseLoc.addEventListener('mousemove', (e) =>
  console.log(e.offsetX, e.offsetY)
);
*/

/*
// FORM EVENTS
let form = document.querySelector('.sign-up-Form');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // access the input using id
  // console.log(email.value, '&', password.value);
  //since we have given names to input hence we can  directly access the input using name
  console.log(form.userEmail.value, '&', form.userPassword.value);
  console.log('Form has been submitted');
});


// REGULAR EXPRESSION (Regex) : It is a pattern of characters used to do pattern matching or we can say for "Data Validation"

//Implementation of password validation
//a)length at least = 8  " .{min_length,max_length}$"
//b) at least contain one upper case letter "^(?=.*?[A-Z])"
//c) at least contain one lower case letter"continue...(?=.*?[a-z])"
//d) at least contain one digit between o to 9 "...continue (?=.*?[0-9])"
//creating custom validation for password from the above rules
let passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let passwordValue = password.value;
  console.log(passwordValue);
  let result = passwordValue.match(passwordPattern);
  console.log(result);
  if (result) {
    console.log('Your password is strong');
  } else {
    console.log('OOps Weak password, please try again');
  }
});


// REGULAR EXPRESSION PART-2 (REGEX) --> basic form validation for userName
//Implement user name validation
//a)Username can only consists of [A-Z] or [a-z] --> /^[A-Za-z]/
//b)Length of the user name between 6 - 12 /{min_length,max_length}$/
let usernamePattern = /^[A-Za-z]{6,12}$/;

let form = document.querySelector('.sign-up-Form');
let user = document.querySelector('#name');
let password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userName = user.value;
  //test method returns boolean values
  let result = usernamePattern.test(userName);
  console.log(result);
  if (result == true) {
    console.log('UserName is accepted');
  } else {
    console.log('OOps Weak userName, please try again');
  }
});

// KEYBOARD EVENT
let usernamePattern = /^[A-Za-z]{6,12}$/;

let form = document.querySelector('.sign-up-Form');
let user = document.querySelector('#name');
let password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userName = user.value;
  //test method returns boolean values
  let result = usernamePattern.test(userName);
  console.log(result);
  if (result == true) {
    console.log('UserName is accepted');
  } else {
    console.log('OOps Weak userName, please try again');
  }
});
//live feedback  --> console will display live, if your given data is accepted or not
user.addEventListener('keyup', (e) => {
  if (usernamePattern.test(e.target.value)) {
    //true
    console.log('Passed');
    // setAttribute('selector_type','class_name')
    user.setAttribute('class', 'success');
  } else {
    console.log('failed');
    user.setAttribute('class', 'error');
  }
});
*/

/*
//Working with array (simple methods)

let letters = ['a', 'b', 'c', 'd'];
// reverse() : Mutate the original array*** ---> mutating method
// console.log(letters.reverse());
// console.log(letters);

// concat the array ---> non mutating method
let num = [1, 2, 3, 4, 6];
let res = letters.concat(num); 
let res2 = [...letters, ...num];
console.log(res2);
console.log(res);

//JOIN METHOD
let letters = ['a', 'b', 'c', 'd'];
// join() ---> Non mutating method
let joined = letters.join('-');
console.log(joined);
console.log(typeof joined);

//SLICE METHOD
//a) used to extract part of array
//b) Array.slice(startIndex, lastIndex (excluded ))
//c) return new array of extracted element
//d)non mutating method
let num = [12, 23, 34, 46, 2];
let extractedArray = num.slice(1, 4);
console.log(extractedArray);


//SPLICE METHOD
//a)  mutating method : mutates the original array
//b) used to add new elements inside an array
//c) Array.splice(index, no. of value to be deleted,  ValueToBeAdded)
//d) return deleted item in the form of array
//e) slice can be used to add more items inside the original array
// removing the elements using slice
let num = [10, 232, 24, 54, 32];
let updated = num.splice(1, 2, 100, 200);
console.log(num);
console.log(updated);
//adding the elements using slice
let nums = [22, 33, 44, 55, 66];
let upgrade = nums.splice(2, 0, 111, 222, 333);
console.log(nums);
console.log(upgrade); // only returns the deleted element



// AT METHOD
let num = [22, 33, 44, 55, 66];
console.log(num[0]);
console.log(num.at(2));
// getting the last element of array
console.log(num[num.length - 1]);
// extracting last two values by providing negative number and returning a new array using slice
console.log(num.slice(-2));
[55, 66];
// extracting last two values and returning a new array using slice and then giving the index position to get the result from newly generated array
console.log(num.slice(-2)[1]); //newArray[1]
// Advantage of using at method to get the last index value
console.log(num.at(-1));

//At method can also work on strings
let name = 'larry';
console.log(name.at(-1));



// HIGHER ORDER FUNCTIONS

// MAP METHOD : create new array from original array by applying transformation method
// always use map method when you want to get the newArray of the same original's array length
// Doesn't change the original array


let salary = [20000, 500000, 600000, 40000, 2000000, 3000000000];
// using map method ... increment the salary by 50%, data is given in the array
let newSalary = salary.map((ele) => ele / 2 + ele);
console.log(newSalary);


// FILTER METHOD (Used to perform filtration on Array )
// Return only the filtered element
// Length of the new array may or may not be equal to the length of the original array
// Doesn't change the original array
let gifts = [
  'watch',
  'ring',
  'chocolates',
  'Iphone',
  'watch',
  'ring',
  'movie-tickets',
];

let filteredArray = gifts.filter((ele) => {
  if (ele == 'watch' || ele == 'ring') {
    return ele;
  }
});
console.log(filteredArray);


// REDUCE METHOD (Used to reduce the array)
// Run reducer function for each array's element
// syntax : Array.reduce(function(total,currentValue), initial value of total)
// It return single value
// Does not mutate the original Array

let num = [12, 23, 354, 675];

let res = num.reduce((totalValue, ele) => {
  // totalValue is initially zero
  console.log('total value is : ', totalValue);
  return totalValue + ele;
}, 0);
console.log(res);



// FIND METHOD
// It returns the "first" matched element we are looking for... else it will return undefined if not found

let students = [
  { id: 44, name: 'meenakshi mishra' },
  { id: 44, name: 'meenakshi sharma' },
  { id: 11, name: 'sanjay joshi' },
  { id: 22, name: 'akansha kumari' },
  { id: 33, name: 'pooja singh' },
  { id: 44, name: 'meenakshi verma' },
];

let resu = students.find((ele) => {
  return ele.id === 44;
});
console.log(resu);

//FIND-INDEX METHOD
//It return "index" of that array element who "first" pass the test otherwise return -1 if not such index is present

let ages = [11, 22, 33, 44, 11];
let res = ages.findIndex((ele) => {
  return ele > 11;
});
console.log(res);


//SOME METHOD : returns "true" if "any" array element pass the test
let scores = [33, 44, 55, 66];
let res = scores.some((ele) => ele > 10);
console.log(res);

//EVERY METHOD : returns "true" if "ALL" array element pass the test
let newScores = [33, 44, 55, 66];
let newRes = scores.every((ele) => ele > 35);
console.log(newRes);

//FLAT ARRAY : It creates a new array with the elements of the "subArray" concatenated into it.
let arr = [22, 33, 44, 55, [100, 102, 104]];
console.log('Before flat method ', arr);
let newArr = arr.flat(); // by default 1 value is passed inside flat method.... it shows the level of the subarray inside the array
let ar1 = [1, 2, 3, [4, 5, [6, 7, 8]]]; // this shows the level of subArray
let newArray = ar1.flat(3);
console.log('After flat method ', newArray);


//FLAT-MAP METHOD
// question --> If A USER BUY A PRODUCT, WE WANT TO ADD MORE EQUIPMENT IN THAT PRODUCT
//It is the combination of "map()" method followed by the "flat()" method of depth "1"

let cart = [
  {
    name: 'MOBILE PHONE',
    qty: 2,
    price: '12k',
  },
  {
    name: 'TABLET',
    qty: 4,
    price: '10k',
  },
  {
    name: 'I-PHONE',
    qty: 1,
    price: '1LAC',
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name == 'MOBILE PHONE') {
    return [
      item,
      {
        name: 'MOBILE-CHARGER',
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});

console.log(newCart);



//SORTING OF ARRAY USING SORT METHOD
// sort () --> Ascending way
// Mutate the original array
// by default sort() method is used to sort strings
// It firstly converted everything into string and then
let letters = ['f', 'e', 'k', 'a', 'm'];
console.log('before sorting : ', letters);
letters.sort();
console.log('After sorting : ', letters);
//NOTE: sort() is used for string but not for integers.... so the solution for that by passing comparable function inside sort method
let nums = [-1, -22, -5, -2, 0, 4, 64, 21, 4];
// console.log(nums.sort()); // Unexpected.. sort() is used to sort string
// logic/Algorithm behind sorting of integers
// [a,b,c,d,e]
// if a-b < 0 => means a < b => A,B (KEEP SAME ORDER)
// if a-b > 0 => means a > b => B,A (SWITCH THE ORDER)
console.log('unsorted integer', nums);
//PASSING COMPARABLE FUNCTION INSIDE SORT METHOD TO PERFORM ASCENDING AND DESCENDING ON INTEGERS
// sort(CompareFunction():@param compareFn Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.)
nums.sort((a, b) => {
  if (a < b) {
    return -1; // that means no swap required
  }
  if (a > b) {
    return 1; // that means swap the number
  }
});
console.log('sorted integer ', nums);
//Other way of declaring sort() method for integer [ASCENDING ORDER]
let numbers = [0, 32, 43, -21, -4];
numbers.sort((a, b) => a - b);
console.log('after ASCENDING using sort method: ', numbers);

//Other way of declaring sort() method for integer [DESCENDING ORDER]
console.log(
  'after descending using sort method: ',
  numbers.sort((a, b) => b - a)
);


//CHAIN OF METHODS
let num = [11, 22, 33, 44, 55, 66];
// using slice first we are fetching the number by giving the range and then applying the splice method to get back the deleted element by providing (index_location, no. of items to be deleted, newValueToBeAdded)
let res = num.slice(0, 3).splice(2, 1, 45);
console.log(res, '&&', num);

let num2 = [11, 22, 33, 44, 55, 66];
// using slice first we are fetching the number by giving the range and then applying the splice method to get back the deleted element by providing (index_location, no. of items to be deleted, newValueToBeAdded).... Adding a new element inside the return array from slice method array using push method, Here push method return the length of new array not the array
let res = num2.slice(0, 3).splice(2, 1, 45).push(8);
console.log(res, '&&', num2);

*/

/*
// DATE AND TIME : Date object always carry date and time

// Using date method
let currentDate = new Date();
console.log(currentDate);

let updatingDate = new Date(10, 11, 2); // (YEAR, 0-11 month,date, hour, minute seconds)
console.log(updatingDate);

// Using timeStamp (integer number represent in "ms" from 1-1-1970)
// let currentDate = new Date(0); // 0 is time in "ms"  --> unix's first timeStamp in computer world
// let currentDate = new Date(84600000);
// // 1 day = 24 hrs * 60 min * 60 sec = 86400000ms
// console.log(currentDate);

//to get time in ms ... since 1970
// let currentDate = new Date().getTime();
// console.log(currentDate); //mili seconds

// you can pass hour minute and seconds also
// let updatingDate = new Date(10, 11, 2, 12, 40, 2); // (YEAR,0-11 month,date, hour, minute seconds)
// console.log(updatingDate);

// DATE AND TIME METHODS
let completeDateAndTime = new Date(12, 3, 12, 2, 30, 45);
console.log(completeDateAndTime);
console.log(completeDateAndTime.getFullYear());
console.log(completeDateAndTime.getMonth()); //0-11 month
console.log(completeDateAndTime.getDate());
console.log(completeDateAndTime.getDay()); //0 (sunday)-6(saturday)
console.log(completeDateAndTime.getHours());
console.log(completeDateAndTime.getMinutes());
console.log(completeDateAndTime.getSeconds());
console.log(completeDateAndTime.getMilliseconds());

//MINI PROJECT : DIGITAL CLOCK

let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');

const ticking = () => {
  let currentDate = new Date();
  let getHour = currentDate.getHours();
  let getMin = currentDate.getMinutes();
  let getSec = currentDate.getSeconds();

  hourHand.textContent = getHour;
  minuteHand.textContent = getMin;
  secondHand.textContent = getSec;
};

setInterval(ticking, 1000); // running after every second
*/

/*
LOCAL STORAGE : DATABASE FOR BROWSER
In Previous todo list task when we refresh the browser we loose our current state data.... local storage saves our data

//Store and retrieve data from database

//Store and retrieve data from local storage

// local storage is an Api provided by browser to store data inside browser

console.log(window.localStorage);
console.log(localStorage);

// SET THE ITEM IN LOCAL STORAGE
// localStorage.setItem('passion', 'Programming'); //(key and value pair)
// localStorage.setItem('age', 23);
console.log(localStorage);

// GET THE ITEM FROM LOCAL STORAGE
console.log(localStorage.getItem('age')); // need to pass the "Key"

// UPDATE THE LOCAL STORAGE
localStorage.setItem('age', 20); // overwrite the previous value by passing the key and value
console.log(localStorage);

// REMOVE THE ITEM FROM LOCAL STORAGE
localStorage.removeItem('age');
console.log(localStorage);

// HOW TO STORE COMPLEX DATA STRUCTURE LIKE ARRAY OF OBJECTS
// ULTIMATELY IN LOCAL STORAGE, DATA STORE IN STRING FORMATE

let vehicles = [
  {
    company: 'TATA',
    model: '2023',
  },
  {
    company: 'TOYOTA',
    model: '2021',
  },
  {
    company: 'HYUNDAI',
    model: 2024,
  },
];
console.log(vehicles);
console.log(typeof vehicles);

//TO STORE THE ABOVE DATA IN LOCAL STORAGE, FIRSTLY WE NEED TO CONVERT IT INTO STRING
let stringOfVehicles = JSON.stringify(vehicles);
console.log('string conversion: ', stringOfVehicles);
console.log(typeof stringOfVehicles);

// NOW SAVING THE DATA [STRING FORMATE] INSIDE LOCAL STORAGE
localStorage.setItem('Vehicles', stringOfVehicles);
console.log(localStorage);
console.log(typeof localStorage); // object

// GET THE ITEM FROM LOCAL STORAGE IN ITS ORIGINAL OBJECT FORMATE
let storedData = localStorage.getItem('Vehicles'); // pass as a string formate
console.log(storedData);
console.log(typeof storedData);
// CONVERTING STRING TO OBJECT FORMATE
let objectFormate = JSON.parse(storedData);
console.log(objectFormate);
console.log(typeof objectFormate);
*/

// OOPS : OBJECT ORIENTED PROGRAMMING ********************** VERY IMPORTANT (VISIT W-3-SCHOOL FOR BETTER NOTES)

/*

OBJECT ORIENTED PROGRAMMING : CONSTRUCTOR

JavaScript Object Constructors
Example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Notes
It is considered good practice to name constructor functions with an upper-case first letter.

About this
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

See Also:
The JavaScript this Tutorial

Object Types (Blueprints) (Classes)
The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

In the example above, function Person() is an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
ADVERTISEMENT

What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable. It is a keyword. You cannot change the value of this.
See Also:
The JavaScript this Tutorial

Adding a Property to an Object
Adding a new property to an existing object is easy:

Example
myFather.nationality = "English";
The property will be added to myFather. Not to myMother. (Not to any other person objects).

Adding a Method to an Object
Adding a new method to an existing object is easy:

Example
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
The method will be added to myFather. Not to myMother. (Not to any other person objects).

Adding a Property to a Constructor
You cannot add a new property to an object constructor the same way you add a new property to an existing object:

Example
Person.nationality = "English";
To add a new property to a constructor, you must add it to the constructor function:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
This way object properties can have default values.

Adding a Method to a Constructor
Your constructor function can also define methods:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}
You cannot add a new method to an object constructor the same way you add a new method to an existing object.

Adding methods to an object constructor must be done inside the constructor function:

Example
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
The changeName() function assigns the value of name to the person's lastName property.

Now You Can Try:
myMother.changeName("Doe");
JavaScript knows which person you are talking about by "substituting" this with myMother.

Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().

Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function
String Objects
Normally, strings are created as primitives: firstName = "John"

But strings can also be created as objects using the new keyword:
firstName = new String("John")

Learn why strings should not be created as object in the chapter JS Strings ??????????
ANSWER ((((((((((((((((((((((((((((((((
JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

Example
let text = "John Doe";
You can use single or double quotes:

Example
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

Example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
String Length
To find the length of a string, use the built-in length property:

Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
ADVERTISEMENT

Escape Character
Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
The sequence \"  inserts a double quote in a string:

Example
let text = "We are the so-called \"Vikings\" from the north.";
The sequence \'  inserts a single quote in a string:

Example
let text= 'It\'s alright.';
The sequence \\  inserts a backslash in a string:

Example
let text = "The character \\ is called backslash.";
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

Breaking Long Code Lines
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";
You can also break up a code line within a text string with a single backslash:

Example
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.

A safer way to break up a string, is to use string addition:

Example
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
You cannot break up a code line with a backslash:

Example
document.getElementById("demo").innerHTML = \
"Hello Dolly!";
JavaScript Strings as Objects
Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
But strings can also be defined as objects with the keyword new:

let y = new String("John");
Example
let x = "John";
let y = new String("John");
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = "John";
let y = new String("John");
When using the === operator, x and y are not equal:

let x = "John";
let y = new String("John");
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new String("John");
let y = new String("John");
(x === y) true or false?

let x = new String("John");
let y = new String("John");
Comparing two JavaScript objects always returns false.
))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

Number Objects
Normally, numbers are created as primitives: x = 30

But numbers can also be created as objects using the new keyword:
x = new Number(30)

Learn why numbers should not be created as object in the chapter JS Numbers.
ANSWERRRR ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
  JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.

Example
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

Extra large or extra small numbers can be written with scientific (exponent) notation:

Example
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

Value (aka Fraction/Mantissa)	Exponent	Sign
52 bits (0 - 51) 	11 bits (52 - 62)	1 bit (63)
Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Example
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
The maximum number of decimals is 17.

Floating Precision
Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;

To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
ADVERTISEMENT

Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:

Example
let x = 10;
let y = 20;
let z = x + y;
If you add two strings, the result will be a string concatenation:

Example
let x = "10";
let y = "20";
let z = x + y;
If you add a number and a string, the result will be a string concatenation:

Example
let x = 10;
let y = "20";
let z = x + y;
If you add a string and a number, the result will be a string concatenation:

Example
let x = "10";
let y = 20;
let z = x + y;
A common mistake is to expect this result to be 30:

Example
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
A common mistake is to expect this result to be 102030:

Example
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.

Numeric Strings
JavaScript strings can have numeric content:

let x = 100;         // x is a number

let y = "100";       // y is a string
JavaScript will try to convert strings to numbers in all numeric operations:

This will work:

let x = "100";
let y = "10";
let z = x / y;

This will also work:

let x = "100";
let y = "10";
let z = x * y;

And this will work:

let x = "100";
let y = "10";
let z = x - y;

But this will not work:

let x = "100";
let y = "10";
let z = x + y;

In the last example JavaScript uses the + operator to concatenate the strings.

NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example
let x = 100 / "Apple";

However, if the string is numeric, the result will be a number:

Example
let x = 100 / "10";
You can use the global JavaScript function isNaN() to find out if a value is a not a number:

Example
let x = 100 / "Apple";
isNaN(x);
Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

Example
let x = NaN;
let y = 5;
let z = x + y;
Or the result might be a concatenation like NaN5:

Example
let x = NaN;
let y = "5";
let z = x + y;
NaN is a number: typeof NaN returns number:

Example
typeof NaN;
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

Example
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
Division by 0 (zero) also generates Infinity:

Example
let x =  2 / 0;
let y = -2 / 0;
Infinity is a number: typeof Infinity returns number.

Example
typeof Infinity;
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example
let x = 0xFF;
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

Example
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals:

let x = 123;
But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
Example
let x = 123;
let y = new Number(123);
Do not create Number objects.

The new keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = 500;
let y = new Number(500);
When using the === operator, x and y are not equal.

let x = 500;
let y = new Number(500);
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new Number(500);
let y = new Number(500);
(x === y) true or false?

let x = new Number(500);
let y = new Number(500);
Comparing two JavaScript objects always returns false.
))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

Boolean Objects
Normally, booleans are created as primitives: x = false

But booleans can also be created as objects using the new keyword:
x = new Boolean(false)

Q) WHY BOOLEANS SHOULD NOT BE CREATED AS OBJECTS

ANSWERRRRRRRRRRRRRR(((((((((((((((((((((((((
JavaScript Booleans
A JavaScript Boolean represents one of two values: true or false.

Boolean Values
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

The Boolean() Function
You can use the Boolean() function to find out if an expression (or a variable) is true:

Example
Boolean(10 > 9)
Or even easier:

Example
(10 > 9)
10 > 9
Comparisons and Conditions
The chapter JS Comparisons gives a full overview of comparison operators.

The chapter JS If Else gives a full overview of conditional statements.

Here are some examples:

Operator	Description	Example
==	equal to	if (day == "Monday")
>	greater than	if (salary > 9000)
<	less than	if (age < 18)
The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

ADVERTISEMENT

Everything With a "Value" is True
Examples
100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14
Everything Without a "Value" is False
The Boolean value of 0 (zero) is false:

let x = 0;
Boolean(x);
The Boolean value of -0 (minus zero) is false:

let x = -0;
Boolean(x);
The Boolean value of "" (empty string) is false:

let x = "";
Boolean(x);
The Boolean value of undefined is false:

let x;
Boolean(x);
The Boolean value of null is false:

let x = null;
Boolean(x);
The Boolean value of false is (you guessed it) false:

let x = false;
Boolean(x);
The Boolean value of NaN is false:

let x = 10 / "Hallo";
Boolean(x);
JavaScript Booleans as Objects
Normally JavaScript booleans are primitive values created from literals:

let x = false;
But booleans can also be defined as objects with the keyword new:

let y = new Boolean(false);
Example
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
Do not create Boolean objects.

The new keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = false;
let y = new Boolean(false);
When using the === operator, x and y are not equal:

let x = false;
let y = new Boolean(false);
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new Boolean(false);
let y = new Boolean(false);
(x === y) true or false?

let x = new Boolean(false);
let y = new Boolean(false);
Comparing two JavaScript objects always return false.
)))))))))))))))))))))))))

CONSTRUCTOR NOTES FROM CODER-DOST
//Constructor function and the "new" object
// We cannot use "arrow - function" as Constructor
// call constructor function using "new" keyword
//a) new {object} created empty initially
//b) "this" = object
//c) Object link to protoType [ All JavaScript objects inherit properties and methods from a prototype. ]
//d) function automatically return {object}
// creating a constructor of a function
let Car = function (color, model) {
  // instance properties (ie variables)
  this.carColor = color;
  this.carModel = model;
  //Not a good practice
  // DEFINING METHODS
  this.login = function () {
    console.log('login method');
  };
};

// new Car --> Constructor,  instanceOfTheCar --> instance
let instanceOfTheCar1 = new Car('BLACK', 2022);
console.log(instanceOfTheCar1); // creating an object from Car
console.log(typeof instanceOfTheCar1);

let instanceOfTheCar2 = new Car('RED', 2024);
console.log(instanceOfTheCar2); // creating an object from Car
console.log(typeof instanceOfTheCar2);

// checking whether the instance belongs to a specific constructor type
console.log(instanceOfTheCar2 instanceof Car); // true


PROTOTYPES : Each object created by "constructor" function have an access to all "methods" and "properties / variables" present inside that "constructor's"  prototype
All JavaScript objects inherit properties and methods from a prototype.

JavaScript Object Prototypes
All JavaScript objects inherit properties and methods from a prototype.

In the previous chapter we learned how to use an object constructor:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
We also learned that you can not add a new property to an existing object constructor:

Example
Person.nationality = "English";
To add a new property to a constructor, you must add it to the constructor function:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
ADVERTISEMENT

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
The JavaScript prototype property also allows you to add new methods to objects constructors:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

note : Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

let Car = function (color, model) {
  // instance properties (ie variables)
  this.carColor = color;
  this.carModel = model;
};

// WE CAN SET "METHOD" to Prototype
Car.prototype.startEngine = function () {
  console.log('this is start engine method');
};

// WE CAN SET "PROPERTIES/ VARIABLES" to Prototype
Car.prototype.company = 'HONDA'; // this will available to all object which is created by constructor since All JavaScript objects inherit properties and methods from a prototype.

so now Each object created by "constructor" function have an access to all "methods" present inside that "constructor" prototype
checking prototype by using constructor itself instead of constructor's instance(ie. object)
console.log(Car.prototype);

let instanceOfTheCar1 = new Car('BLACK', 2022);
let instance = new Car('BLUE', 2000);
// console.log(instanceOfTheCar1, instance); // object
// NOTE --> NOW WHENEVER AN OBJECT IS CREATED USING SPECIFIC CONSTRUCTOR, EVERY OBJECT HAS ACCESS TO CONSTRUCTOR'S PROTOTYPE'S METHODS
instanceOfTheCar1.startEngine();

// checking prototype by using constructor's instance (ie object)
// console.log('checking proto-type of object: ',instanceOfTheCar1.__proto__);
// console.log('checking proto-type of object: ',instance.__proto__);

// checking prototype by using constructor's instance (ie object)
// NOTE --> NOW WHENEVER AN OBJECT IS CREATED USING SPECIFIC CONSTRUCTOR, EVERY OBJECT HAS ACCESS TO CONSTRUCTOR'S PROTOTYPE'S PROPERTIES/ VARIABLES because All JavaScript objects inherit properties and methods from a prototype.
console.log(instanceOfTheCar1.company);
console.log(instance.company);

// CONCLUSION:PROTOTYPE INHERITANCE ---> NOW WHENEVER AN OBJECT IS CREATED USING SPECIFIC CONSTRUCTOR, EVERY OBJECT HAS ACCESS TO CONSTRUCTOR'S PROTOTYPE'S ALL METHODS AND PROPERTIES (VARIABLES) because All JavaScript objects inherit properties and methods from a prototype.

// checking prototype by using constructor's instance(ie. object)
console.log('checking proto-type of object: ', instance.__proto__);
// checking prototype by using Constructor itself
// the above line is same as
console.log(Car.prototype);

console.log(instance); // constructor, proto-type

// TO CHECK WHETHER THE INSTANCE (created object from constructor) BELONG TO THE SPECIFIC PROTO-TYPE OR NOT
console.log(instance.__proto__.isPrototypeOf(instance)); //true

console.log(Car.prototype.isPrototypeOf(Car)); // false : Prototype is created using Car Constructor. And Car's instance is created using proto-type.
// Car.prototype is prototype of all objects created through the car constructor.

// prototype of array
let array = [2, 3, 4, 5, 6, 7]; // [] is same as new Array([]) constructor..... given below
console.log(array.__proto__);
//same as above
console.log(Array.prototype);

// note : prototype: it is a type of template which is used to link the constructor's instance's (ie object) to the prototype to have access to the methods and properties present inside prototype.

console.log(array.__proto__.__proto__); // chaining of prototype.... the last level/ end is null
console.log(Object.prototype);

// NEW WAY OF DECLARING PROTOTYPE
// ES6 Classes ( They still implement prototypal inheritance behind the scene)
//class declaration

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log('this is start engine method of class car');
  }
}

let honda = new Car('RED', 2024);
console.log(honda.__proto__.isPrototypeOf(honda));
honda.startEngine();
// traditional way of declaring prototype in the above class
Car.prototype.breakMethod = function () {
  console.log('this is a break method, belongs to car class');
};
console.log(honda);
honda.breakMethod();
honda.startEngine();
console.log(honda.__proto__);

IMPORTANT NOTES
a) classes are not hoisted (In function we can call it above while declaring it below)
b) classes are also first class citizens(pass as an argument or return)
c) classes are executed in strict mode


OBJECT ORIENTED PROGRAMMING ---->  JAVASCRIPT ACCESSORS (Getters and Setters)
please first visit -> https://www.w3schools.com/js/js_object_accessors.asp

ECMAScript 5 (ES5 2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties).
GETTER AND SETTER METHOD : It allows you to define Object Accessor


JavaScript Getter (The get Keyword)
This example uses a lang property to get the value of the language property.

Example
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
JavaScript Setter (The set Keyword)
This example uses a lang property to set the value of the language property.

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
ADVERTISEMENT

JavaScript Function or Getter?
What is the differences between these two examples?

Example 1
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a method:
document.getElementById("demo").innerHTML = person.fullName();
Example 2
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
Example 1 access fullName as a function: person.fullName().

Example 2 access fullName as a property: person.fullName.

The second example provides a simpler syntax.

Data Quality
JavaScript can secure better data quality when using getters and setters.

Using the lang property, in this example, returns the value of the language property in upper case:

Example
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
Using the lang property, in this example, stores an upper case value in the language property:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
Object.defineProperty()
The Object.defineProperty() method can also be used to add Getters and Setters:

A Counter Example
// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

NOTE : THE KEY IN OBJECT ARE KNOWN AS "PROPERTIES" 

*/

/*
coder-dost
Object Oriented Programming : Getter and Setter method 

JavaScript Object Accessors
JavaScript Accessors (Getters and Setters)
ECMAScript 5 (ES5 2009) introduced Getter and Setters.

Getters and setters allow you to define Object Accessors (Computed Properties).

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  // declaring a function not the property, hence need to call using function call
  startEngine() {
    console.log('this start engine belongs to Car class');
  }

  // declaring a property not the function with the help of get method, hence you can call it using property name
  get accelerate() {
    console.log('press the acceleration paddle to move the car');
  }

  get description() {
    return ` Color of car is ${this.color} and its model is ${this.model}`;
  }

  // declaring a property not the function using set method to change the color, hence you need to set the color using property name
  set changeColor(color) {
    this.color = color;
    console.log(color);
  }
}

let honda = new Car('red', 2024);
console.log(honda);
honda.startEngine(); // accessing as function
//getting the property
honda.accelerate; // accessing as property [computed property]
console.log(honda.description); // accessing as property [computed property]
// setting the property
honda.changeColor = 'White';
console.log(honda);
console.log(honda.description);

// conclusion : getter and setter are mainly used for abstraction like hiding the implementation part and displaying only the required part.

*/

/*
OBJECT ORIENTED PROGRAMMING : STATIC METHOD 

// STATIC METHOD : Method which is not present on constructor "prototype" property but "constructor" itself
// static method : can never inherit to all object
// STATIC METHOD : this method is only available for Car class but not for instance objects.
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  // declaring a function not the property, hence need to call using function call
  startEngine() {
    console.log('this start engine belongs to Car class');
  }

  // static method : can be declared using static keyword inside class, but you need to use class name to declare static method outside the class without "static keyword".
  // TO USE OBJECT INSIDE STATIC METHOD YOU NEED TO PASS THE OBJECTS AS PARAMETERS INSIDE  STATIC METHOD
  // static methods are only accessible by Class name
  static run(x) {
    console.log('car is running');
    console.log(x);
    console.log(x.color);
    console.log(x.model);
  }
}

// static method/Property(variable) : can be created using class name or using "static keyword "
Car.breakMethod = function () {
  console.log('this is a break method of the car');
};

let honda = new Car('red', 2024);
console.log(honda);

// accessing as function
honda.startEngine();
// Such methods are only accessible by constructor only but not the object
Car.breakMethod();

// honda.run(); --> static methods are only accessible to the class but not the instance objects
// honda.breakMethod(); --> static methods are only accessible to the class but not the instance objects

// TO USE OBJECT INSIDE STATIC METHOD YOU NEED TO PASS THE OBJECTS AS PARAMETERS INSIDE  STATIC METHOD
// static methods are only accessible by Class name
Car.run(honda);

NOTE:  We call static method using class Name because static method/variables are defined at class level. Hence we are unable to call static method using instance object. 

Static methods are not accessible by class's instance object directly 

Due to static method there is no need to create class's instance object to call it 

some of the static method and their use >>>>>>>>>>

Number.parseInt()
JSON.parse()
JSON.stringify()
Array.from()
*/

/*
OBJECT ORIENTED PROGRAMMING : INHERITANCE

- INHERITANCE IS USED FOR CODE REUSABILITY
- It is a relation between parent class and child class
- Child class can access all the methods and properties of parent class


INHERITANCE USING CLASS BASED
// parent class
class Car {
  constructor(color, model) {
    console.log('constructor belongs to car class');
    this.model = model;
    this.color = color;
  }
}
// here we are declaring the prototype outside the class using Car.prototype.methodName
  Car.prototype.startCarEngine = function(){
    console.log('Start the car ---- engine');
  }

//child class
// class Bike extends Car {}

class Bike extends Car {
  //Adding some additional properties
  constructor(model, color, carCapacity) {
    console.log('constructor belongs to bike class');
    //giving the model and color to parent class constructor
    super(model, color);
    this.carCapacity = carCapacity;
  }

  bikeMethod() {
    console.log('this method belongs to bike class');
  }
}

// object from Car class
let honda = new Car('white', 2024);

// object from Bike Class
let newBike = new Bike('Black', 2023, '1000cc');

console.log('car class object : ', honda);
console.log('bike object :', newBike);

console.log("prototype of cLASS cAR'S honda object is: ", honda.__proto__);
console.log("prototype of CLASS BIKE'S newBike object is: ", newBike.__proto__);

//NOTE: USING INHERITANCE WE ARE OBTAINING PROTO-TYPE CHAINING.

// INHERITANCE USING FUNCTION BASED

//QUES --> hOW IS IT POSSIBLE TO CREATE INHERITANCE FROM PROTOTYPE ???
//PROTOTYPAL INHERITANCE (using constructor function)
let Car = function (color, model) {
  this.model = model;
  this.color = color;
};

Car.prototype.startCarEngine = function () {
  console.log('Start the car ---- engine');
};

let car1 = new Car('orange', 2022);

let Bike = function (model, color, carCapacity) {
  // Here we are calling the Car context inside bike context as given below :
  Car.call(this, model, color);
  // console.log('this stores', this);
  this.carCapacity = carCapacity;
};
console.log('printing both constructor functions prototype before inheritance');
console.log('prototype of car is : ', Car.prototype);
console.log('prototype of bike is : ', Bike.prototype);
// Inheriting from parent class
// creating a prototype object for bike function and passing car's prototype as a parameter so that it stores all the data from car function
// to store car's prototype we are calling class Object to create an object for us using (Object.create()) so that we can store the car's prototype
// similar to example given below
// let ajay = Object.create({ fname: 'Sunny' });
// console.log(ajay);
Bike.prototype = Object.create(Car.prototype);
console.log('printing both constructor functions prototype after inheritance');
console.log('prototype of car is : ', Car.prototype);
console.log('prototype of bike is : ', Bike.prototype);

// creating a new method inside Bike child class ie bike's constructor
Bike.prototype.ownBike = function () {
  console.log(`this bike is mine and belongs to child class`);
};

let bike1 = new Bike('white', 2024, '1000cc');
console.log(car1, bike1);

*/

/*
OBJECT ORIENTED PROGRAMMING - OOPS

CHAINING OF METHODS 

class BankAccount {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.movements = [];
    console.log('this stores: ', this);
  }

  getMovements() {
    console.log(typeof this.movements);
    console.log(this.movements);
    console.log(`after getMovements this is: `, this);

    return this;
  }

  deposit(val) {
    console.log('currentDeposit: ', val);
    console.log(`deposit: `, this.movements.push(val));
    // return this.movements.push(val); // return type is number but due to push it returns length of the array
    console.log(`after deposit this is: `, this);
    return this;
  }

  withdraw(val) {
    console.log('currentWithdraw: ', val);
    console.log(`withdraw: `, this.deposit(-val));
    return this;
  }
}

let account1 = new BankAccount('zack', 2323);
//WITHOUT CHAINING OF METHODS
account1.deposit(100);
account1.withdraw(50);

console.log(`final submission: `, account1.getMovements());

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$');
let account2 = new BankAccount('priya kumari', 3322);
//IMPORTANT NOTE******************************************************
// FOR CHAINING OF METHODS IT IS MANDATORY FOR FUNCTIONS TO RETURN SAME TYPES OF VALUES INSTEAD OF RETURNING ARRAY, ARRAY'S LENGTH, NUMBER...DUE TO WHICH NEXT METHOD WILL NOT BE ABLE TO FETCH THE PREVIOUS FUNCTION S' RETURN DATA HENCE THROWS AN ERROR. SO IT IS BETTER TO RETURN OBJECT ITSELF DUE TO WHICH THE NEXT FUNCTION WILL EASILY FETCH ITS REQUIRED DATA FROM THE PREVIOUS FUNCTION'S RETURN OBJECT.
// chaining of methods
account2.deposit(1000).withdraw(400).withdraw(100).deposit(300);

console.log(`final submission: `, account2.getMovements());

console.log(account1.getMovements(), account2.getMovements());
*/

/*

//todo
// to understand callback hell and promise ...please go through topics like javascript working? asynchronous javascript? since javascript is single-threaded language then how a single-threaded it deals with n no. of request?why we use callback for request and its advantage?why callback hell is not good?How we use promise to overcome callback hell?
//ANSWER
//read this page : https://www.javatpoint.com/callback-hell-in-javascript

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


ASYNCHRONOUS JAVASCRIPT

// Any code which takes some time to return the output without working synchronously is known as asynchronous.
//Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete. Synchronous JavaScript is the programming approach where tasks of a program are executed sequentially one at a time.
//In synchronous method the code stop executing the next work until the previous work is not done. eg: live tv cricket match on social media platform

console.log(1);
console.log(2);
// setTimeOut function (callback function, time)
setTimeout(
  () =>
    console.log(`this is call back function which is Asynchronous in nature`),
  3000
);
console.log(3);
console.log(4);


//XML HttpRequest : All modern browsers have a built-in XMLHttpRequest object to request data from a server.
//XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
//Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

//If your communication needs to involve receiving event data or message data from a server, consider using server-sent events through the EventSource interface. For full-duplex communication, WebSockets may be a better choice.

// The XMLHttpRequest object is a developers dream, because you can:

// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server  - after the page has loaded
// Send data to a server - in the background

// Constructor
// XMLHttpRequest()
// The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

//to know more ... source : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest



let request = new XMLHttpRequest(); //calling the constructor which have prototype
// request.readyState : initially zero
// readyState shows the status of the request
//XMLHttpRequest: readyState property
//The XMLHttpRequest.readyState  property holds the status of the XMLHttpRequest.
console.log(request, request.readyState);

//The onreadystatechange property defines a function to be executed when the readyState changes.
request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  // we want to see the response after task completion ie last ready state which is [0-4]
  if (request.readyState === 4 && request.status == 200) {
    console.log(request.responseText);
  }
});

//setting the request for retrieving data
// open(): stored inside constructor's prototype
// open('type_of_request',"URL")
// use the link to get fake json data in response : https://jsonplaceholder.typicode.com/todos
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

//sending the request
request.send();

//Value	  ---->   State	  ---->   Description
// 0	---->UNSENT ---->	Client has been created. open() not called yet.
// 1	----> OPENED	----> open() has been called.
// 2	----> HEADERS_RECEIVED ---->	send() has been called, and headers and status are available.
// 3	----> LOADING ---->	Downloading; responseText holds partial data.
// 4	----> DONE ------>	The operation is complete.

//UNSENT : The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

// OPENED : open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

// HEADERS_RECEIVED: send() has been called, all redirects (if any) have been followed and the response headers have been received.

// LOADING: Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

// DONE: The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

//Property	-----> Description
// onreadystatechange	-----> Defines a function to be called when the readyState property changes
// readyState ---->	Holds the status of the XMLHttpRequest.like
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// status	----> 200: "OK". some others are :
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference
// statusText	Returns the status-text (e.g. "OK" or "Not Found")
// The onreadystatechange function is called every time the readyState changes.

// When readyState is 4 and status is 200, the response is ready.

// Http response status code :
// Informational response (100-199)
// successful response (200-299)
// Redirection Message (300-399)
// Client error responses (400-499)// bad request by the client that is user
// Server error response (500-599)
**************************************************************************************8

*/

/*
//USING CALLBACK FUNCTION FETCHING DATA THROUGH URL/API

let todo = function (callback) {
  let request = new XMLHttpRequest();
  console.log(request, request.readyState);

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      // console.log(request.responseText);
      // A common use of JSON is to exchange data to/from a web server.When receiving data from a web server, the data is always a string.Parse the data with JSON.parse(), and the data becomes a JavaScript object like Array.
      let javascript_obj = JSON.parse(request.responseText);
      //callback(error, data){}: since this block has status_code=200 hence use error as undefined
      callback(undefined, javascript_obj);
    } else if (request.readyState === 4) {
      // console.log(`data could not be fetch`);
      //callback(error, data){}: since this block has error hence use data as undefined
      callback(
        'Since all readyState [0-4] has covered but the Data could not found',
        undefined
      );
    }
  });

  //set up the request
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  //sending the request
  request.send();
};

//calling todo function and passing another function to it for error detection
todo((error, Data) => {
  console.log('Running error detection function');
  // if error is true then display error else display data
  error ? console.log(error) : console.log(Data);
});

// proving that all this is working as Asynchronous
console.log(1);
console.log(2);
console.log(3);

//

*/
/********************************************************************************** */

/*
//USING CALLBACK FUNCTION FETCHING DATA THROUGH LOCALLY STORED JSON FILE

let todo = function (callback) {
  let request = new XMLHttpRequest();
  console.log(request, request.readyState);

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      // console.log(request.responseText);
      // A common use of JSON is to exchange data to/from a web server.When receiving data from a web server, the data is always a string.Parse the data with JSON.parse(), and the data becomes a JavaScript object like Array.
      let javascript_obj = JSON.parse(request.responseText);
      //callback(error, data){}: since this block has status_code=200 hence use error as undefined
      callback(undefined, javascript_obj);
    } else if (request.readyState === 4) {
      // console.log(`data could not be fetch`);
      //callback(error, data){}: since this block has error hence use data as undefined
      callback(
        'Since all readyState [0-4] has covered but the Data could not found',
        undefined
      );
    }
  });

  //set up the request
  //You can fetch the data through api/url, locally created file
  request.open('GET', 'data.json');

  //sending the request
  request.send();
};

//calling todo function and passing another function to it for error detection
todo((error, Data) => {
  console.log('Running error detection function');
  // if error is true then display error else display data
  error ? console.log(error) : console.log(Data);
});
*/
//************************************************************** */

/*

// new topic : reason why call is not preferred ???????????????
// Answer : It makes code more complex to understand.Because if you get any error between callback which will not be an easy task to find out the error since you have pass one function inside another and so on. Also for big operations where you are fetching, posting,updating,editing data via callback using API Calls callback is not preferred. callback can collapse all task if any major problem arise.
//CALLBACK HELL CHAIN OF CALLBACK FUNCTION INSIDE ONE ANOTHER

// here resource --> json data file
let todo = function (resource, callback) {
  let request = new XMLHttpRequest();
  console.log(request, request.readyState);

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      let javascript_obj = JSON.parse(request.responseText);

      callback(undefined, javascript_obj);
    } else if (request.readyState === 4) {
      callback(
        'Since all readyState [0-4] has covered but the Data could not found',
        undefined
      );
    }
  });

  //set up the request
  request.open('GET', resource);

  //sending the request
  request.send();
};

//calling todo function and passing another function to it for error detection
// passing the "source"--> json data file
// HERE WE ARE CREATING CHAIN OF TODO FUNCTION(CALLBACK) by using nested callbacks
//TASK-01
todo('data.json', (error, Data) => {
  console.log('Running error detection function');
  error ? console.log(error) : console.log(Data);

  // TASK-02 (callback hell)
  todo('ron1.json', (error, Data) => {
    console.log('Running error detection function');
    error ? console.log(error) : console.log(Data);

    // TASK-03 (CALLback hell)
    todo('zenet.json', (error, Data) => {
      console.log('Running error detection function');
      error ? console.log(error) : console.log(Data);
    });
  });
});

*/
//************************************************************************************** */

//SOLUTION FOR CALLBACK HELL : USING PROMISE
/*
BASIC SYNTAX FOR PROMISE
// new Promise(callback_function(resolve, reject))
let getSomeThing = () => {
  return new Promise((resolve, reject) => {
    // resolve is used to get the data after operation
    // resolve({
    //   id: 23,
    //   name: 'Pranjali',
    // });
    reject('unable to process data');
  });
};

// .then() ---> if your promise is resolved, it will call then() method to tell what to do next with the data
// .catch()---> if your promise is rejected, it will call catch() method to tell something is wrong
getSomeThing()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

*/

//***************************************************************************************************** */

/*
SOME OPERATION USING PROMISE

let todo = (resource, callback) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    console.log(request, request.readyState);

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status == 200) {
        let javascript_obj = JSON.parse(request.responseText);
        resolve(javascript_obj);
      } else if (request.readyState === 4) {
        reject((err) => console.log('error while fetching the data: ', err));
      }
    });

    //set up the request
    request.open('GET', resource);

    //sending the request
    request.send();
  });
};

todo('data.json')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/
//********************************************************************************************************** */
/*
//CHAINING OF PROMISES

let todo = (resource, callback) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    console.log(request, request.readyState);

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status == 200) {
        let javascript_obj = JSON.parse(request.responseText);
        resolve(javascript_obj);
      } else if (request.readyState === 4) {
        reject((err) => console.log('error while fetching the data: ', err));
      }
    });

    //set up the request
    request.open('GET', resource);

    //sending the request
    request.send();
  });
};
//chaining of promises
// TASK -01
todo('data.json')
  .then((data) => {
    console.log('Promise -1 resolved: ', data);
    // TASK -02
    return todo('ron.json');
  })
  .then((data2) => {
    console.log('Promise -2 resolved: ', data2);
    //TASK- 03
    return todo('zenet.json');
  })
  .then((data3) => {
    console.log('Promise -3 resolved: ', data3);
  })
  .catch((error) => console.log(error));

// NOTE : catch is only applicable for 1st-error occurrence, catch will not work for more than one error
*/
/********************************************************************************************************* */
