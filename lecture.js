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
    // hello();
    // addition(5, 7);
    // add(5,7);


    // Scope local and global


    // Example Problem: we want to make a function that gives us the area given the length and width
    function area(length, width) {
        return length * width;
    }
    // console.log(area(3,5));

    // Example Problem 2: we are given the area function, and now we want to compute volume given a height
    const volume = function(length, width, height) {
        console.log(height * area(length,width));
        return height * area(length,width);
    }

    // volume(3, 5, 10);

    // Parameters as input


    // Arrow Functions
    const volumeArrow1 = (length, width, height) => (height * length * width);

    const volumeArrow2 = (length, width, height) => {return (height * length * width)};

    const volumeArrow3 = (length, width, height) => {
        return height * length * width;
    };

    // console.log(volumeArrow1(3, 5, 10));
    // console.log(volumeArrow2(3, 5, 10));
    // console.log(volumeArrow3(3, 5, 10));

// 5. Numbers
    // Power
    // console.log(2**3)

    // Increment
    // let increment = 11;
    // increment += 1;
    // console.log(increment);

    // Absolute
    // console.log(Math.abs(-295));

    // Random Number
    // console.log(Math.ceil(Math.random() * 100));

    // Conditional
    // let exclusiveLowerBound = 7;
    // console.log('actual is greater than exclusive lower bound:', 9 > exclusiveLowerBound);

// 6. Strings     012345
    // Index / Accessing Strings and length
    // let myName = "Quincy";
    //             // 0  1  2
    // let myArr = [1, 5, 8];
    // console.log(myName.length);
    // console.log(myArr.length);

    // let job = "Coordinator";
    // job = "Director";
    // console.log('job before reassignment:', job);

    // Concat
    // let firstName = "Alexis";
    // let lastName = "Rose";
    // let fullName = firstName + " " + lastName;

    // console.log(fullName);

    // String Interpolation
    // let food = "churro";
    // let methodOfTransport = "the subway";
    // let sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;
    // let interpolation = `The best way to trabel to get ${food} is surely to take ${methodOfTransport}`;

    // console.log("Resulting sentence 1:", sentence);
    // console.log("Resulting sentence 2:", interpolation);

    // =============STRING METHODS =================
    //               0123456789
    // let subString = "JavaScript".substring(2,10);
    // console.log(subString);
    //            012345 
    // let google = "Google";
    // let subGoogle = google.indexOf('g');
    // console.log(google[subGoogle]);
    // console.log('index where substring is found:', subGoogle);
    
    let myName = "Quincy is \"cool\" \nother text goes here";
    // console.log(myName.split(""));
    console.log(myName);

// 7. Arrays and Loops

// 8. If Statements/Conditionals

// 9. DOM Manipulation

// 10. Events