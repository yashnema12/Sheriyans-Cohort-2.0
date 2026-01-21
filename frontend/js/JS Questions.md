`# JavaScript Questions

## Basic console usage

1. Create two variables: one storing your full name and another storing your favorite hobby. Print a sentence in the format:
  "My name is <your name> and <your hobby>".

2. Perform the arithmetic calculation `45 * 2 - 10` and print the final result.

3. Write a program that retrieves and prints the current year using JavaScript’s `Date` object.

4. Store your first name and last name in two different variables, then print your full name in a single output.

5. Create a variable with an initial value. Print its value, update the value, and print the updated value again.

6. Print a custom error message using `console.error()`.

7. Store a number in a variable and print the square of that number.

8. Create a boolean variable and print its value.

9. Store your age in a variable and print whether your age is greater than 18.

10. Divide `100` by `0` and print the result. Observe what JavaScript returns.

## Variables and Data types

11. Create a variable using `let` and print its value.

12. Declare a constant named `PI` with the value `3.14` and print it.

13. Create a variable, print its value, update the value, and print the updated value again.

14. Print the output of `typeof null` and observe what type JavaScript reports.

15. Create a variable containing a numeric value as a string (e.g., `"25"`) and print its type.

16. Create a boolean variable and print its type using `typeof`.

17. Create three variables: a string, a number, and a boolean. Print all of them together in a formatted output.

18. Declare a variable without assigning a value and print its type using `typeof`.

19. Create a variable with the value `undefined` and print its type.

20. Create an array using `const`, print it, attempt to reassign the entire array (and handle the error), then modify the existing array by adding a new element and print the updated array.

## Loops

21. Write a program that prints the numbers from 1 to 50 using a `for` loop.

22. Using a `while` loop, calculate and print the sum of numbers from 1 to 10.

23. Iterate through each character of the string `"JavaScript"` using a `for...of` loop and print each character.

24. Using a `for` loop, print all odd numbers from 1 to 20. Use `continue` to skip even numbers.

25. Use a `do...while` loop to print the numbers from 5 down to 1.

26. Write a program to calculate the factorial of 5 using a loop and print the result.

27. Use nested `for` loops to print a 3×3 grid pattern where each row contains the numbers 1 to 3.

  Example output format:

  1 2 3
  1 2 3
  1 2 3

28. Reverse an array manually (without using the `reverse()` method) and print the reversed array.

29. Using a `while` loop, print all numbers between 1 and 100 that are divisible by 5.

30. Create an object with keys like `name` and `age`. Use a `for...in` loop to print all the keys of the object.

## Arrays

31. Create an array of movie names and print them in a single line separated by ` - ` using `join()`.

32. Create an array of numbers and print the value at index 1.

33. Add two elements to the beginning of an array using `unshift()` and print the updated array.

34. Create an array of song names, remove the last element using `pop()`, and print the remaining elements.

35. Given an array, extract the first three elements using `slice()` and print them.

36. Create an array of numbers and find the index of the number `5` using `indexOf()`.

37. Create an array of values and use `includes()` to check whether the value `3` exists in the array. Print the result.

38. Concatenate two arrays using `concat()` and print the resulting combined array.

39. Sort an array of numbers in ascending order using a custom comparator function and print the sorted array.

40. Create a copy of an array using the spread operator (`...`). Print the copied array and also print whether the copied array and original array reference the same memory.

## Functions

41. Write a function that takes a number as input and returns whether it is "even" or "odd".

42. Create a function that calculates and returns the area of a circle given its radius.

43. Write a function that takes an array of numbers and returns the sum of all elements in the array.

44. Write a function that checks whether a given string starts with a specified character. Return `true` or `false`.

45. Create a function that takes two numbers and returns the larger of the two.

46. Write a recursive function that calculates and returns the factorial of a given number.

47. Write a function that reverses a string and returns the reversed version.

48. Create a function that accepts an array of numbers and returns the largest number in the array.

49. Write a function that converts a string into kebab-case (all lowercase words separated by hyphens).

50. Write a function named `helloWorld` that prints "Hello World" to the console.

## Conditionals

51. Write a function that takes a number as input and returns whether it is "even" or "odd".

52. Create a function that calculates and returns the area of a circle given its radius.

53. Write a function that takes an array of numbers and returns the sum of all elements in the array.

54. Write a function that checks whether a given string starts with a specified character. Return `true` or `false`.

55. Create a function that takes two numbers and returns the larger of the two.

56. Write a recursive function that calculates and returns the factorial of a given number.

57. Write a function that reverses a string and returns the reversed version.

58. Create a function that accepts an array of numbers and returns the largest number in the array.

59. Write a function that converts a string into kebab-case (all lowercase words separated by hyphens).

60. Write a function named `helloWorld` that prints "Hello World" to the console.

## Objects

61. Create an object representing a person with properties such as `name`, `age`, and `city`. Print the object.

62. Add a new property (e.g., `isStudent`) to an existing object and print the updated object.

63. Access and print the value of the `city` property from an object using bracket notation.

64. Delete a property (e.g., `age`) from an object and print the modified object.

65. Write a function that takes an object as input and prints all its keys using `Object.keys()`.

66. Create an array of book objects, where each object contains a `title` and an `author`.

67. Access and print the author of the second book from the array of book objects.

68. Write a function that checks whether a specific key exists inside an object. Print "Key exists" or "Key does not exist" accordingly.

69. Write a function that returns the total number of keys present in an object.

70. Use `Object.assign()` to merge an empty object with two existing objects/arrays and print the result.

## Strings

71. Create a string and print its length using the `.length` property.

72. Print the last four characters of a string using the `.slice()` method with a negative index.

73. Convert a string to lowercase using `.toLowerCase()` and print the result.

74. Split a string into an array using a space `" "` as the delimiter and print the result.

75. Find and print the index of a specific character (e.g., `"A"`) inside a string using `.indexOf()`.

76. Replace a word inside a string with another word using `.replace()` and print the updated string.

77. Repeat a string three times using `.repeat()` and print the result.

78. Write a function that checks whether a given word exists inside a string using `.includes()`.

79. Remove all spaces from a string by splitting and rejoining it, then print the result.

80. Write a function that counts and returns the number of vowels in a given string.

## Mixed

81. Write a function that takes an array and returns a new array containing only the even numbers from the original array.

82. Create a function that counts how many times a specific value appears in an array.

83. Write a function that takes a string as input and prints the reversed string.

84. Create a function that prints a right-angled triangle pattern of asterisks (`*`) based on a given number.

  Example for input 4:

  *
  **
  ***
  ****

85. Write a function that takes an array of numbers and returns a new array where each number is squared.

86. Using a loop, calculate and print the sum of all odd numbers between 1 and 50.

87. Create an object representing a person with first and last name, and print the full name by combining both values.

88. Convert a numeric string to a number using `parseInt()` and add 5 to it. Print the result.

89. Reverse an array manually (without using `.reverse()`) and print the reversed array.

90. Write a program that checks whether an array is empty. Print "array is empty" or "array is not empty".

91. Get the current date and format it as `DD/MM/YYYY`. Print both the original `Date` object and the formatted date.

92. Using `Math.min()` and the spread operator, find and print the smallest number in an array.

93. Write a function that returns the first `n` numbers of the Fibonacci sequence.

94. Write a function that divides two numbers. If the second number is zero, throw and catch an error saying "Cannot divide by zero".

95. Write a function that returns the index of the first vowel in a string. If no vowel exists, return `-1`.

96. Write a function that removes duplicate values from an array and returns the unique values.

97. Write a function that merges two sorted arrays into a single sorted array.

98. Create a function that returns the total number of characters in a string.

99. Access a button with the ID `toggleButton` and add a click event listener that toggles the button’s background color between blue and red.

100. Write a function that checks whether all numbers in an array are greater than a given value using the `.every()` method.

