/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
    let person;
    let bankAccount;
    let rich;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
        bankAccount = 123456789;
        bills = 66666;

    // 3. Assign one to the type Boolean below:
        rich = true;

    // 4. Assign one to the type String below:
        person = "Quincy Pham";

// console.log("This is the bankaccount console log: " + bankAccount);
// console.log(bankAccount - bills);
// console.log(rich);
// console.log(person);

// console.log(person + " is rich, this is " + rich + " because they have this much $" + bankAccount )


// let student = "christy";
// console.log(student);
// student = ava;
// console.log(student);

/*
========== LESSON 2 - FUNCTIONS ==========
*/
// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.

// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square

// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers




/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.

// 2. Create a productofThree function expression that takes in 3 number parameter and returns the product.

// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number

// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
    function getRootRounded(num) {
        return Math.ceil(Math.sqrt(Math.abs(num)));
    }

    console.log(getRootRounded(11));
// 5. Create a getRandom function that returns a random number from 1-100.



/*
========== LESSON 4 - STRINGS ==========
*/
// 1. Create a getPersonStats function statement that takes in 3 Strings: name, job, age. The function should console log a statement such as "Hi my name is [NAME], I am [AGE] years old, and I am a [JOB]".

// 2. Create a sayFirstAndLast function expression that takes in 1 String parameter and console logs "the first character is: [firstChar] and last character is: [lastChar]".

// 3. Create a yellFruitNum arrow function that takes in 1 number parameter, 1 String that is a fruit parameter, and console logs the sentence "I have [number] [FRUIT]" in all caps.

// 4. Create a sliceFruit function that takes in a String of a fruit and console logs everything except the first 2 letters.

// 5. Create a splitFruit function that takes in a String of a fruit and returns an array of the letters split into each index of the array.
