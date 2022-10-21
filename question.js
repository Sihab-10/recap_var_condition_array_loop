/* 

-------------------------------------1. What is js?------------------------------------------

An object oriented programming laguage that is used to create an interactive effects within web browser.

-------------------------------------2.  How does js works?----------------------------------

JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time. The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack
-------------------------------------------------------------
------------------------------Variable-----------------------
-------------------------------------------------------------
-------------------------------3. What is variable?-----------------------------------

variables are container for storing data

----------------------------4. How you declare a variable?-------------------------------

var x = 5;

--------------------5. Types of variable ? how can you find out type of variable?-------------------------------

String data type: zero or more characters written inside quotes.

Numeric data type: Numbers can be written with or without decimals and without quotes.

Boolean data type: It take only the values true(1) or false(0) and written without quotes.

i can find out the type of variable using typeof function

-----------------------6. Primitive data types and Non primitive data types----------------------------------

Primitive Data types: The predefined data types provided by javaScript language are known as a primitive data types

N N B B S S U

Number

Null

Boolean

BigInt

String

Symbol 

Undefined

Non-primitive Data types: The data types that are derived from primitive data types of javaScript language are known as a non-primitive data type.

Object

array


----------------------------------7.Naming Convention of js variable--------------------------------


1.variable name can not be any keywords

2.variable has to be in one words and no space

3.variable name can not be start with a number

4.to write a long name not dash but you can use underscore _ like my_name

5.variable names are case sensitive

6.keywords always written as small letter




*/
// ------------------------------------8. Math operations like +,-,*,/,% -------------------------

// var firstName = "Sihab";
// var lastName = " Sarar";
// var fullName = firstName + lastName;
// console.log(fullName);

// var num1 = 22;
// var num2 = 3;
// var addition = num1 + num2;
// var substraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulas = num1 % num2;
// console.log(addition);
// console.log(substraction);
// console.log(multiplication);
// console.log(division);
// console.log(modulas);

// -----------------------------------9. Short-hand: +=,-=,*=,/=,%=,++,--------------------------------------

// var num = 5;
// num += 3;
// console.log(num);
// num -= 2;
// console.log(num);
// num *= 2;
// console.log(num);
// num /= 2;
// console.log(num);
// num++;
// console.log(num);
// num--;
// console.log(num);

// ----------------------------------10.Use of ParseInt and ParseFloat----------------------------------
/* var number = "123";
var parsingInt = parseInt(number);
console.log(parsingInt);
console.log(typeof parsingInt);

var decimalNum = 123.23;
var parsingFloat = parseFloat(decimalNum);
console.log(parsingFloat);
console.log(typeof parsingFloat); */
// -----------------------------------11.tofixed in js-------------------------------------------------
// var num = 23.33558;
// var num = num.toFixed(2);
// console.log(num);
/* 
----------------------------------------------------------------------------------------------
--------------------------------------------Array------------------------------------------------
----------------------------------------------------------------------------------------------
*/
// ------------------------------------12.what is the purpose of an array?----------------------------
// the purpose of an array is to store multiple pieces of data of the same type together.
// -------------------------------------13. How to declare of an array in js?----------------------
/* 
const array_name = [item1, item2, ...];      

*/
// ------------------------------------14. Number of elements of an array------------------------
// by using length function
/* var people = ["Sihab", "Sakin", "Sumon"];
console.log(people.length); */
// ------------------------------------15. what is index for an array---------------------------
/* 
index is the position of the element for an array . it will start with 0
*/
//-------------------------------------16. Find the value of an element by index--------------
/* var people = ["Sihab", "Sakin", "Sumon"];
console.log(people[2]); */
// -----------------------------------17. Change an element by index----------------------
/* var people = ["Sihab", "Sakin", "Sumon"];
people[2] = "Sifat";
console.log(people); */
// ----------------------------------18. get the index of an element by the value ------------
// use indexof function
/* var people = ["Sihab", "Sakin", "Sumon"];
var index = people.indexOf("Sakin");
console.log(index); */
// -----------------------------------20. What does it mean when you get undefined while getting the value of an elemnet by index --------------

// undefined means : A variable that has not been assigned a value is of type undefined

/* 
var people = ["Sihab", "Sakin", "Sumon"];
console.log(people[3]); 

*/
//----------------------------21. How can you add an element to an array at the last position --------------
// use push to add element to an array as the last element of an array
/* 
var people = ["Sihab", "Sakin", "Sumon"];
people.push("Sifat");
console.log(people);
*/
// ---------------------------22. How can remove an element from an array at the last position -------------
// use pop to get rid of the last element
/* 
var people = ["Sihab", "Sakin", "Sumon"];
people.pop();
console.log(people);
*/
// --------------------------23. How to add an element at the first position of an array --------------
// use unshift() function for adding the first element of an array
/* 
var people = ["Sihab", "Sakin", "Sumon"];
people.unshift("Sifat");
console.log(people);
*/
// ------------------------24. How to remove an elemnet at the first position of an array ----------
// use shift() function for remove the first element of an array
/* 
var people = ["Sihab", "Sakin", "Sumon"];
people.shift();
console.log(people);
*/
/* 
-----------------------------------------------------------------------------------------------
------------------------------------------Conditionals-----------------------------------------------------
-----------------------------------------------------------------------------------------------
*/
// --------------------------------25. meaning of >,<,>=,<=,==,!=,===,!==
// these are called comparison operator
/* 
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/
// --------------------------------26. meaning of &&, ||, !
// these are called logical operator
/* 

&&	logical and
A B   Result
0 0     0
0 1     0
1 0     0
1 1     1

||	logical or
A B   Result
0 0     0
0 1     1
1 0     1
1 1     1

!	logical not
A    Result
0      1
1      0

*/
/* -----------------------27. Lets say you have x amount of money . if you have more than 80,000 then you will buy a mac , if you have more than 60,000 then you will buy a gaming laptop, if you have more than 
40,000 then you will buy lenovo yoga, if you have more than 20,000 then you will buy an used laptop otherwise you will use your mobile phone. 
--------------------------------------------------*/
/* 
var my_money = 90000;
if (my_money >= 80000) {
  console.log("I will buy a mac");
} else if (my_money >= 60000) {
  console.log("I will buy a gaming laptop");
} else if (my_money >= 40000) {
  console.log("I will buy a lenovo yoga");
} else if (my_money >= 20000) {
  console.log("I will buy a used laptop");
} else {
  console.log("I will use my mobile phone");
}
*/
/* 
----------------------------------------------------------------------------------------------------
----------------------------------------Loop------------------------------------------------------------
----------------------------------------------------------------------------------------------------
*/
// ----------------------28. Display "Ajke amar mon valo nei" 39 times ---------------------
/* 
var content = 0;
while (content <= 39) {
  console.log("Ajke amar mon valo nei");
  console.log(content);
  content++;
}
*/
// ----------------------29. Display numbers between 58 to 98---------------------
/* 
for (i = 58; i <= 98; i++) {
  console.log(i);
}
*/
//-----------------------30. Show all even numbers between 412 to 456 ---------------
/* 
for (i = 412; i <= 456; i += 2) {
  console.log(i);
}
*/
// ----------------------31. Show all odd numbers 581 to 623 ------------------
/* 
for (i = 581; i <= 623; i += 2) {
  console.log(i);
}
*/
// -----------------------32. Difference between for loop and while loop ------------
/* 
The major difference between for loop and while loop is that in the case of for loop the number of iterations is known whereas in the case of the while loop number of iterations is unknown and the statement will run until the condition is proved false.
*/
// ------------------------33. Declare an array for all the topics that you will have learned last few days display then as output------------
// showing an array
/* 
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
*/
//update an array
/* 
var fruits = ["Apple", "Banana", "Orange"];
fruits[2] = "Mango";
console.log(fruits);
*/
// add an item from the last index of an array
/* 
var fruits = ["Apple", "Banana", "Orange"];
fruits.push("Grapes");
console.log(fruits);
*/
// delete an item from the last index of an array
/* 
var fruits = ["Apple", "Banana", "Orange"];
fruits.pop();
console.log(fruits);
*/
// display all the element of an array using loop
/* 
var fruits = ["Apple", "Banana", "Orange"];
for (var i = 0; i < fruits.length; i++) {
  var fruit = fruits[i];
  console.log(fruit);
}
*/
//Run a loop from 30 to 86. this loop will stop if the values get higher then 44
/* 
for (i = 30; i <= 86; i++) {
  console.log(i);
  if (i == 44) {
    break;
  }
}
*/
// Write the price of the book that you have. Display the prices if the prices is lower then 200
