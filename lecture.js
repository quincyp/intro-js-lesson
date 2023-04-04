/*
During this course you will learn the following.
Make sure to code-along during lecture.
*/


// 1. Link the script.js file from the HTML
    // see html file for script tag


// 2. Console Log + Comments + Reserved Words + Camel Case + Naming Convention
    // camelCaseLooksLikeThis


// 3. Creating Variables + Data Types
    // Changing the value of a variable
    let text = "this is a sentence";

    // Placing the variable into a function()
    // alert(text);
    // console.log(text);

    // 7 Primitive Data Types
        /*
        String = text
        Number = number
        Bigint = really big number
        Boolean = true or false
        Undefined = value is undefined until you set one
        Null = there is no value
        Symbol = symbol
        */
    // 3 Object Data Types
        /*
        object = unindexed list that uses key:value pairs
        array = indexed list of values
        date = date
        */

// 4. Creating Functions (+ Event Listeners?)
    // REVIEW:
        // 3 TYPES OF VARIABLES:
        var a;
        let b;
        const c =  3;

        a = 1;
        b = 2;

        a = 11;
        a = 12;
        a = a + 1; // 13

        // console.log(a);


    // Function Statements
    let x = 1;
    function hello() {
        console.log("hello world");
        // addition(5,7);
        console.log(x);
    }
    
    function addition(a, b) {
                //5   7   1
        let sum = a + b + x;
        console.log(sum);
        // return sum;
    }

    // Function Expression
    let add = function addition2(a, b) {
        let sum = a + b;
        console.log(sum);
    }
    // Invoking functions
    hello();
    addition(5, 7);
    // add(5,7);


    // Scope local and global


    // Example Problem: we want to make a function that gives us the area given the length and width
    function area(length, width) {
        return length * width;
    }
    console.log(area(3,5));

    // Example Problem 2: we are given the area function, and now we want to compute volume given a height
    const volume = function(length, width, height) {
        console.log(height * area(length,width));
        return height * area(length,width);
    }

    volume(3, 5, 10);

    // Parameters as input


    // Arrow Functions

// 5. Strings

// 6. Numbers

// 7. Arrays and Loops

// 8. If Statements/Conditionals

// 9. DOM Manipulation

// 10. Events