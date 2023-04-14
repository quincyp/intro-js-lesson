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
    // console.log(myName);

// 7. Arrays 
        //   0  1        2      3
let array = [1,"string", true];
array[2] = "cat";
array.unshift(23);
let arraySlice = array.slice(0, 2);


var array1 = [1, 2, 3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2).concat(array3);

// console.log(resultOfConcat1);

let text2 = "wordddd";
text2 = text2.split("").join("");
// text2 = text2.join("");

// console.log(array3.indexOf('me'));

// Nested Array || 2D Array || Multi-dimensional Array
                //  0 1 2
let nestedArray = [[1,2,3], // 0
                   [4,5,6], // 1
                   [7,8,[a, b, c]]] // 2

        //   0 1 2
// let array = [4,5,6];
// console.log(array[1])
// console.log(nestedArray[2][2][1]);

// 8. and Loops

    // For Loop
    for(let index = 0; index <= 3; index++){ //0 1 2 3
        // console.log(`cat ${index}`);
    }

    // For Loop through an array
            //   0          1       2           3
    // let cars = ["Toyota", "Honda", "Subaru", "Mazda"];
    // let carText = "";
    // let carText2 = "";

    // carText += cars[0] + " ";
    // carText += cars[1] + " ";
    // carText += cars[2] + " ";
    // carText += cars[3] + " ";
    // console.log(carText);

    
    // for(let i = 0; i < cars.length; i++) {
    //     carText2 += cars[i] + " ";
    // }
    // console.log(carText2);

    // While Example Car (same as for loop refactored)
    // let i = 0;
    // while(i < cars.length) {
    //     console.log(cars[i]);
    //     i++;
    // }

    // While Example List (uses a boolean)
    let list = [4, 5, 6];
    
    let j = 0;
    while(list[j]) {
        // console.log(list[j]);
        j++;
    }
    

    // For Each
    let example = ['one', 'two', 'three'];
    // example.forEach(function(elem, index) {
    //     console.log(elem, index);
    // });

    // example.forEach((elem, index) => { console.log(elem, index)});


    // Nested Arrays and Nested For Loops
        let toyota = ["corolla", "camry", "prius"];
        let honda = ["civic", "accord", "cr-z"];
        let subaru = ["outback", "forrester", "wrx", "impreza", "brz"];
    let cars = [toyota, honda, subaru];
    // console.log(cars);


    for(let i = 0; i < cars.length; i++) {
        for(let j = 0; j < cars[i].length; j++) {
            console.log(cars[i][j]);
        }
    }
// 9. If Statements/Conditionals

// 10. DOM Manipulation

// 11. Events