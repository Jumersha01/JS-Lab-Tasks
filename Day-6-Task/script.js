//Write a 'JavaScript' program to store 10 elements in array and print them on a console take the inputs from the user.
// let elements;
//  let arr =[];
// let size =+prompt("Entet the sizs of an array");
// for(let i =1;i<=size;i++){
   
//    elements =+prompt("Enter the Elements")
//    arr.push(elements);
   
// }
// console.log(arr)

//------------------------------------------------------------

// Write a 'JavaScript' program to sort the numbers array using selection sort technique without using predefined function.

// The selection sort technique is the normal sorting technique used to sort the array by comparing the elements and swapping them.
// Sample Input :
// let numbers = [45, 3, 25, 78, 12];
// Sample output :
// Ascending Order: [3, 12, 25, 45, 78]
// Descending Order: [78, 45, 25, 12, 3]

let numbers = [45, 3, 25, 78, 12];
let temp
for(let i =0;i<numbers.length;i++){
    for(let j =i+1;j<=numbers.length;j++){
        if(numbers[i]>numbers[j]){
            temp = numbers[i]
          numbers[i]=numbers[j]
          numbers[j]=temp
        }
    }
    
}
// console.log(numbers)
//--------------------------------------------------------------------------
// Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.

// The original array is containing both numbers and strings.
// define two empty arrays: numbers and strings
// use the .forEach() method to iterate through mixedArray
// check the type of the element using typeof operator and store the respective type in the array.
// if the type is string add the element into the string array else add it into the numbers array.
// Sample input :
// let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];

// sample output :
// Numbers: [12, 45, 78]
// Strings: ["apple", "banana", "cherry", "orange"]

let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];

let nu=[];
let st =[];
mixedArray.forEach(element => {
    // if you want campare a type of any number to number so number must be 'number'
    if((typeof element)==='number'){
        nu.push(element);
    }
    else{
        st.push(element)
    }
  
});
console.log(nu)
console.log(st)

//=------------------------------------------------------------------------------
// Que 4 :
// -------
// Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays.

// The original array contains only the numeric values.
// your task is to find whether the array element is even or add
// Take 2 separate arrays : evenArr and oddArr.
// if the element is even add it into the evenArr else add it into the oddArr.
// Sample input :
// Numbers Array : let orgArray = [3, 12, 25, 45, 78]
// Sample Output :
// Even Array = [12, 78]
// Odd Array = [3, 25, 45,]

let even=[];
let odd =[];
let a = [3, 12, 25, 45, 78]
a.forEach(element => {
    // if you want campare a type of any number to number so number must be 'number'
    if(element%2==0){
        even.push(element);
    }
    else{
        odd.push(element)
    }
  
});
console.log(`Even Array is [${even}]`)
console.log(`Odd Array is [${odd}]`)
//----------------------------------------------------------------------
// Write a 'JavaScript' program to print Sum of All array elements.

// your task is to take the numbers array and the elements from the user using the prompt() function.
// you have to find and print the sum of the all array elements.
// sample input:
// let numbers = [45, 3, 25, 78, 12];

// Sample output :
// The sum of array elements is : 163
numbers = [45, 3, 25, 78, 12];
 let values=numbers.reduce((per,ne)=>per+ne,0);
 console.log(`The sum of an array is : ${values}`);