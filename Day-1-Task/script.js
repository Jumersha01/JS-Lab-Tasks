// console.log("Is it working")
// Que 1 :  Write a 'JavaScript' program to print student details using console.log() function only.
// Sample Output : Name = Rohit Sharma
//                 Roll No = 1001
//                 Branch = B. Tech
//                 Address = Hyderabad
//                 Collage Name = Naresh It

console.log("Name = Rohit Sharma");
console.log(" Roll No = 1001")
console.log("  Roll No = 1001")
console.log(" Address = Hyderabad")
console.log("Collage Name = Naresh It")



// Que 2 :  Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.
// -------

// Sample input : a=20, b=10;

// Sample Output :
//                Addition is : 30
//                subtraction is : 10
//                Multiplication is : 200
//                Division is : 2
//                Modulation is : 0

let a = 20;
let b = 10;
console.log(` Addition is : ${a+b}`)
console.log(` subtraction is : ${a-b}`)
console.log(`Multiplication is ${a*b}`)
console.log(` Division is : ${a/b}`)
console.log(` Modulation is : ${a%b}`)


// Que 3 :  Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.
// -------

// Sample input : let a = 10, b=20;

// Sample Output : Addition is 30                        
console.log(`Addition is ${a - (-b)}`)


// Que 4 :  Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.
// -------

// Sample input : let number = 23;

// Sample Output : 5

// Explanation : given number is = 23 . so the result is (2+3)=5

// Note : Use Math.floor() function for division.
                             
let x = 23;

let first = x%10;
let last = Math.floor(x/10)

console.log(`Sum of  x is ${first+last}`)



// Que 5 :  Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
// -------
// ( Without using any control statement )

// Sample input : let number = 123;

// Sample Output : 4

// Explanation : given number is = 123 . so the result is (1+3)=4

// Note : Use Math.floor() function for division.
let c=123;
let firt = c%10;
let las = Math.floor(c/100)

console.log(`Sum of  a is ${firt+las}`)


// Que 6 : Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.
// -------

// Sample input :
// Side of square is : 5
// Length and breadth of rectangle is : 4 , 5

// Sample output :
// The area of the square with side 5 is: 25
// The area of the rectangle with length 4 and breadth 5 is: 20

let side = 5;
let length=4;
let breadth = 5

console.log(`The area of the square with side 5 is: ${side*breadth}`)
console.log(` The area of the rectangle with length 4 and breadth 5 is: ${length*breadth}`)


// Que 7 :  Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.
// -------

// Sample input : let a = 10 , b = 20 ;

// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10

let e = 10;
let f = 20;
console.log(`before swapping `,e,f)
let g = f;
f=e
console.log('after swapping',g,e)


// Que 8 :  Write a 'JavaScript' program to swap any two integer number without using third variable and print the output on the console.
// -------

// Sample input : let a = 10 , b = 20 ;

// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10

e = e + f;   
f = e - f;   
e = e - f; 
 console.log(`before swapping `,e,f)

//  Que 9 :  Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.
// -------

// Sample input : let a = 26;

// Sample Output : 20

// Note : Use Math.floor() function for division.

let pre=36;
console.log(Math.floor(pre/10)*10)


// Que 10 :  Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
// --------

// Sample input : let a = 34;

// Sample Output : 40

// Note : Use Math.floor() function for division.          

let l =35;
console.log((Math.floor(l/10)+1)*10)

                               
