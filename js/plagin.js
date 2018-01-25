// Variable
// 1.
let price = 100;
const maxAmount = 5;
const userNickName = 'Maris';
let personalDetails = 'has a driver license';

// 2.
undefined

// 3.
Uncaught ReferenceError: test is not defined

Uncaught TypeError: Assignment to constant variable.

Uncaught SyntaxError: Identifier 'someVariable' has already been declared


// Строки Задачи String

let str = 'some test string'
let title;

title = str.length;
title = str[0];
title = str.toUpperCase() [0];
title = str.toUpperCase () [ str.length - 1];
title = str .substring(10);
title = str.slice(5);
title = str.substr(1, 2);
title = str.slice(4, -1);

console.log(title);


// Numbers
// 1
let number = 20;
let num;

//2 
num = Math.ceil(20.1);
num = Math.round(5.6);
num = Math.max (15, 11, 16, 12, 51, 12, 13, 51);
num = Math.min (15, 11, 16, 12, 51, 12, 13, 51);

// 3
num = Math.floor(Math.random() * 20);

// 4
result = 0.6 + 0.7;

// 5
num = parseFloat("100$");


console.log(num);


// Object
let obj = {
    product: 'iphone',
    other: {
        price: 700,
        currency: 'dollar',
    }
};

console.log(obj);

let detailes = {
    model: 's5', color: 'gold'
};


console.log(detailes);



