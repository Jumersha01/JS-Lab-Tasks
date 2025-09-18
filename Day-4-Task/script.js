// Que 1. Countdown Timer ( while loop )
// ------

//      Implement a simple countdown timer that displays numbers decreasing from a starting point until zero.

// - The while loop continues as long as countDown is greater than or equal to 0. In each iteration, it prints the current count and then decrements countDown, moving closer to the loop's termination.

//     Sample input :  countDown = 5
//     sample output : --- Countdown Start ---
//             5
//             4
//             3
//             2
//             1
//             0
//             --- Countdown End ---

//     Sample input : countDown = 3
//     sample output : --- Countdown Start ---
//             3
//             2
//             1
//             0
//             --- Countdown End ---

//     Sample input : countDown = -2
//     Sample output : Loop condition false initially, negative values are not allowed.

let timer =+prompt("Enter the seconds");
console.log("Countdown Starts");
while(timer>=0){
    console.log(timer);
    timer--;
}
console.log("Countdown end");
//--------------------------------------------------------------------------------------------------------------------------
// Allow a user a limited number of login attempts before locking their account.

// - The while loop runs as long as attemptsLeft is greater than 0 and isLoggedIn is false. Each iteration simulates an attempt, decrements the counter, and might update isLoggedIn if successful.

//     Note : you have to write a JavaScript program to allow the user to attempt the login for certain number of times if user fails the every login attempt lock the user account
   
//     Variable :
//             attempts : hardcoded value (number).
//             isLoggedIn : hardcoded Boolean value ( initially false).
//             correctPassword : hardcoded for comparison (string)
//             enteredPassword : user input using the prompt() (string).

//     the while loop will iterate for every failed attempts of login if the password matches to the correct password make the isLoggedIn flag as true and break the loop. if user exceeds the allowed attempts show message to the user his account is locked due to failed attempts.

//     sample input :  attemptsLeft = 3
//             isLoggedIn = false;
//             enteredPassword = "secret123"
//             correctPassword = "secret123"
//     sample output : Attempt 1: Enter your password. (3 attempts left)
//             Login successful!

//     sample input :  attemptsLeft = 3
//             isLoggedIn = false;
//             enteredPassword = "wrongPassword"
//             correctPassword = "secret123"
//     sample output : Attempt 1:Enter your password. (2 attempts left)
//                 Incorrect password. Please try again.
//             Attempt 2:Enter your password. (1 attempts left)
//                 Incorrect password. Please try again.
//             Attempt 3: Enter your password. (0 attempts left)
//                 Incorrect password. No attempts left. Account locked.


let isLoggedIn =false;
let attempts = 3;
let correctPassword="Junaid123?";
 
while(attempts>=0){
    let enteredpas = prompt("Enter the Password");
    if(enteredpas==correctPassword){
        console.log(`Attempt left = ${attempts}`);
        // console.log(` enteredPassword${enteredpas}`);
    console.log(` Login successful!`);
    isLoggedIn=true
    break;

    }else{
        console.log(` Incorrect password. Please try again.`);
        attempts--;
         console.log(`Attempt left = ${attempts}`);   
         if(attempts==0){
                console.log(`Incorrect password. No attempts left. Account locked.`)
                break;
         }

    }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Process incoming data or user input until a specific "stop" value is encountered.
//  dataInput simulates receiving data. The while loop continues as long as dataInput is not "STOP". This is common for processing streams of information where the end isn't fixed.


//     iterate the loop until user enter stop while receving the inputs from the user, if user enters other values continue the loop.

//     take the inputs from the user inside the while loop until user enters 'Stop'.

//     sample output :

//             --- Data Processing Start ---
//             Processing data: READ DATA
//             Processing data: READ DATA
//             Processing data: ANOTHER DATA POINT              // after this user enters the 'Stop' and loop breaks
//             --- Data Processing Complete. Total items: 3 ---


let value="";
let count =0;
console.log(" --- Data Processing Start ---");
while(true){
    value=prompt("Do You Want to stop the loop");
    if(value=="Stop"){
        break;
    }
    else{
       console.log(" Processing data: READ DATA") ;
       count++;
      
    }


}
 console.log(`Data Processng completer. Total Items ${count}`);
 console.log(" --- Data Processing Ends---");
//-----------------------------------------------------------------------------------------------------------



// Que 4.  Resource Loading Until Completion    (while loop)
// -------
//      Simulate loading a resource (e.g., an image, a game level) that takes multiple steps, continuing until loading is 100% complete.

// - The while loop continues as long as loadProgress is less than 100. It increments the progress by a random amount (simulated here) until the condition is met.
   

//     Note : Use the Math.random() function to generate the random value for loadProgress, if the loadProgress is greater than 100 break the loop.

//     constraints :  let increment = Math.floor(Math.random() * maxLoadIncrement) + 5; // formula to generate the random progress number.


//     sample input :  loadProgress = 0
//             maxLoadIncrement = 25

//     sample output : --- Resource Loading Started ---
//             Loading... 27%
//             Loading... 50%
//             Loading... 63%
//             Loading... 79%
//             Loading... 100%
//             --- Resource Loading Complete! ---


 let increment;
let loadProgress=0;
while(loadProgress<=100){
     console.log(`Loading... ${loadProgress}%`);
     increment= Math.ceil(Math.random()*20)
    
    loadProgress+=increment;
     
     if(loadProgress>100){
        loadProgress=100;
        console.log(`Loading... ${loadProgress}%`);
        break;
     }

    
}
// ----------------------------------------------------------------------------------------------
//    In a simple simulation or game, generate random numbers until a specific target value is reached.

// - The while loop keeps generating currentNumber using Math.random() until it equals targetNumber. This demonstrates a loop where the number of iterations is entirely unpredictable.

//     constraints :  Math.floor(Math.random() * 10) + 1
   
//     sample input :   targetNumber = 7
//              currentNumber = 0
//              attempts = 0

//     sample output :
//             --- Generating Random Number ---
//             Attempt 1: Generated 10
//             Attempt 2: Generated 10
//             Attempt 3: Generated 4
//             Attempt 4: Generated 3
//             Attempt 5: Generated 8
//             Attempt 6: Generated 2
//             Attempt 7: Generated 6
//             Attempt 8: Generated 8
//             Attempt 9: Generated 7
//             --- Target number 7 reached in 9 attempts! ---

let target = 7;
let currentNumber=0;
let attempt= 0;
while(currentNumber!=7){
   ++attempt;
   currentNumber =Math.floor(Math.random()*10)+1;
   console.log(`Attempt ${attempt}: Generated ${currentNumber}`);
}