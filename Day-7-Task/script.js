// write a 'JavaScript' program to Sort the array [45, 3, 25, 78, 12] in ascending and descending order using predefined method.

//         - Define an array by taking the elements from the user using the prompt() function and parseInt() to typecast.
//         - use the sort() method to sort the array.
//         - after sorting the array print the array using the for...of loop.
let numbers = [45, 3, 25, 78, 12];

let ascending = numbers.sort((a,b)=>a-b);

for (const element of ascending) {
    console.log(element)
}
console.log("This is Descending Order")
let decending = numbers.sort((a,b)=>b-a);


for (const element of decending) {
    console.log(element)
}
//===========================================================================================================
// Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.

//     - Define the array mixed of the string and number type elements.
//     - separate the string and the number in separate arrays using filter() method.
   
//     sample input :
//             let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];
//     sample output:
//             string Array = ['apple', 'banana', 'cherry']
//             number array = [10, 20, 30]
   
let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];
let  number=[];
let string=[];
string = mixedArr.filter((ele)=>(typeof(ele)=='string'))
console.log(string)

number= mixedArr.filter((ele)=>(typeof(ele)=='number'))
console.log(number)