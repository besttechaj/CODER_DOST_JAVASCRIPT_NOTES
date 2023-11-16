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

To access an array : arrayName[element_location]
To modify an array : 
arrayName[element_location] = 'set_new_Value'

Array Methods :
a) join(condition) -> returns string
b) indexOf(arrayName.indexOf("Element_Name")) case Sensitive
c) concat() -> two arrays : oldArray.concat(newArray)
d) length() --> arrayName.length
e) push() --> arrayName.push('newItem') : add at the end
f) pop() --> arrayName.pop() : to remove last element

*/

/*
METHODS THAT RETURN BOOLEAN VALUES
a) includes()
b) Comparison Operator always return boolean values ( ==, ===, !=, <, >, <=, >=, !==)
*/
