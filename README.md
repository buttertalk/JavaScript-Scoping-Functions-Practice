# JavaScript-Scoping-Functions-Practice
# JavaScript-Scoping-Functions-Practice
This is practice setting up and using functions in VS Code. 


JavaScript Functions Debrief
Overview
In this JavaScript debrief, we’ll provide you with two types of challenges, Start with Challenge 1 and then move on to challenge 2. You’ll have about 55 minutes to work on these coding challenges together.  Good luck!
Goals
Inside your Dev directory, create a new directory and call it javaScript_functions
cd inside javaScript_functions and create an index.html file.
Either use code . to open up the VS code or you can manually open VS code and choose javaScript_functions to open up.
In index.html, get the boilerplate by pressing (!)- Emmet abbreviation, change the title to javaScript_functions. Create an app.js file and link it to the index.html.
In the app.js file write console.log(“connected!”), open up the index.html in chrome, inspect the page and see if your app.js file is connected!
Go back to app.js and start to work towards challenges. 
Make sure you’re indenting your code, using comments whenever necessary. 
Let’s do some functions!
Here’s how we write a function.
	function sum (a, b) {
		return a + b;
}
console.log(sum ( 5, 6));    // should return 11. 



In this challenge, you’ll return the first element in an array. 
Goal: Create a function getFirstValue that will return the first element of an array.

Example:


	getFirstValue([1,2,3]) should return 1. (Since 1 is at index[0 of the array.)
getFirstValue([3,4,5]) should return 3.


Useful Tips: A. The first element in an array has index 0.
                    B. Instead of console.log you can use return to get the value out of the function.


For this challenge, you’ll write a function that converts minutes into seconds. 
   Goal: Write a function convertMinsToSecs() that takes an integer minutes and converts it into seconds. 


Example: convertMinsToSecs(5) should return 300. ( That’s because each minute is 60 seconds, so 60 * 5 is 300).
               convertMinsToSecs(3) should return 180.


Useful Tips: Don’t forget to return the result.

BONUS Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. Create a function lessThan100 that will see if the sum is less than 100 or not. 

Example: lessThan100(22, 15) ➞ true (That’s because 22 + 15 = 37 which is less than 100)
