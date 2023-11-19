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
*/ 2hr 1min
