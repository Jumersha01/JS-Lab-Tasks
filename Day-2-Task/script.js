// Que 1 : Write a 'JavaScript' program to check and print that the given number is even or odd without using ternary operator and control statements and print the output on the console.
// --------

// Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD

// Note : Don't use any control statement only use logical operators and Take the input from the user using prompt() function.

// ======================================================================================================

let num = 125;
num % 2 == 0 && console.log("Even");
num % 2 != 0 && console.log("Odd");

//   Que 2 : Write a 'JavaScript' program to check and print the Maximum number among two numbers without using ternary operator, control statements and predefined methods.
// --------

// Sample input : let a = 10 , b = 20
// Sample Output : MAX = 20

let a = 24;
let b = 10;
let c = 545;
// a>b&&console.log(`${a} is big`)
// b>a&&console.log(`${b} is big`)

// Que 3 : Write a 'JavaScript' program to check and print the Maximum number among three numbers without using ternary operator, control statements and predefined methods.
// --------

// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

a > b && a > c && console.log(`${a} is big`);
b > a && b > c && console.log(`${b} is big`);
c > a && console.log(`${c} is big`);

// Que 4 :  Write a 'JavaScript' program to check and print the Maximum number among three numbers using ternary operator.
// --------

// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

a > b && a > c
  ? console.log("a is big")
  : b > c
  ? console.log("b is big")
  : console.log("c is big");

// Que 5 :  Write a 'JavaScript' program to check and print that given number is even or odd using ternary operator.
// --------

// Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD

a % 2 == 0 ? console.log("Even") : console.log("Odd");

//  ue 6 : A shopkeeper buys a TV set for Rs. 3500 and sells it at a profit of 27%. Apart from this a VAT of 12.7% and Service Charge is 3.87% is charged.
// -------  Write a JavaScript program to Display total selling price, profit along with vat and service charge.
//          To calculate the selling price, profit, VAT, and service charge, follow these steps:

//          1) Calculate the selling price:

//             Selling Price = Cost Price + Profit

//             Selling Price = Rs. 3500 + (27% of Rs. 3500)

//          2) Calculate the profit:

//             Profit = Selling Price - Cost Price

//          3) Calculate VAT:

//             VAT = 12.7% of Selling Price

//          4) Calculate Service Charge:

//             Service Charge = 3.87% of Selling Price

//     Sample output :
//             Cost Price: Rs. 3500.00
//             Profit (27%): Rs. 945.00
//             Selling Price (without VAT & Service Charge): Rs. 4445.00
//             VAT (12.7%): Rs. 564.52
//             Service Charge (3.87%): Rs. 171.00
//             Total Selling Price (with VAT & Service Charge): Rs. 5180.52

let buying = 3500.0;
let profit = 0.27 * buying;
let vat = (12.7 / 100.0) * buying;
let serc = (3.87 / 100.0) * buying;

//calculating the selling price
let selling_price = profit + buying;

//calculate the profit
profit = selling_price - buying;

console.log(`Cost Price: Rs. ${buying}`);
console.log(`Profit (27%): Rs.${profit}`);
console.log(`Selling price (without VAT & Service Charge):${selling_price}`);
console.log(`Service Charge(3.87%):Rs ${serc}`);
console.log(
  `Total Selling Price (with VAT & Servic Charge)${selling_price + serc + vat}`
);
