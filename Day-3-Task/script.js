// We need to determine if a user's account is currently active or inactive to allow or deny certain operations, such as making a purchase.

// - This if-else statement checks the boolean value of isAccountActive. If isAccountActive is true, the user is permitted to proceed; otherwise, they are informed that their account is inactive.


// Sample input : isAccountActive = true
// sample output : Your account is active. You can proceed with your transaction.

// sample input : isAccountActive = false
// sample output : Your account is currently inactive. Please contact support.

// ==================================================================================================

let isActive =false;
if(isActive){
    console.log("You are permited to proceed");

}
else{
    console.log("You are not permitted to proceed sory,couse your account is inactive");
}


//  A user is setting a new password, and we need to ensure it meets a minimum length requirement.

// - This if-else statement checks if the password string's length is at least 8 characters. If it is, the password is considered valid; otherwise, an error message is displayed.

//     Note : You have to take the input from the user using the prompt() function and by checking the length of the input pass the following testcases.

//     sample input : password = "mySecurePassword123"
//     sample output : Password meets minimum length requirements. Good job!

//     sample input : password = "short";
//     sample output : Password is too short. Please use at least 8 characters.

let password = prompt("Enter the New Password");
if(password.length>=8){
console.log("You set the password Succes Fully");
}
else{
    alert("Password length should be greater or equal than  8 characteres ");
}


let totalSpending = parseInt(prompt("Enter the Spending"));

if(totalSpending<=100){
    console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Bronze.
`);
}
else if(totalSpending>=500&&totalSpending<1000){
console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: .Gold
`)
}
else{
    console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Platinum.
`)
}


// Que 4.    Vehicle Speed Classification
// -------
//     A traffic monitoring system categorizes vehicle speeds into different zones (e.g., slow, normal, fast, excessive) for analysis.

//     This ladder checks vehicleSpeed against predefined ranges. Each else if condition is evaluated in order, assigning a classification as soon as a condition is met.

//     Note : take the speed input from the user based on decide the classification. if the vehicle speed is less than 30 its slow, if it is greater than 30 and less than 60 then its normal , if it is greater than 60 and less than 90 its fast, else its Excessive.

//     sample input : vehicleSpeed = 75
//     sample output: Vehicle speed: 75km/h. Classification: fast
   
//     sample input: vehicleSpeed = 20;
//     sample output: Vehicle speed: 20km/h. Classification: slow

//     sample input: vehicleSpeed = 100;
//     sample output: Vehicle speed: 100km/h. Classification: Excessive


let Speed=parseInt(prompt("Enter the Speed"));

if(Speed<=30){
    console.log(`Vehicle speed: ${Speed}km/h. Classification: slow`);
}
else if(Speed>=30&&Speed<60){
console.log(`Vehicle speed: ${Speed}km/h. Classification: normal`);
}
else if(Speed>60&&Speed<90){
    console.log(`Vehicle speed: ${Speed}km/h. Classification: falst`);
}
else{
    console.log(`Vehicle speed: ${Speed}km/h. Classification: Excessive`);
}



// Que 5.     Advanced Product Discount Eligibility (Nested if)
// ------
//     An e-commerce site applies a discount if a user is a member AND if their purchase total exceeds a certain amount.

// - The outer if checks for isMember. Only if the user is a member does the inner if check the purchaseTotal. This demonstrates a dependency: the purchase total discount is only relevant for members.
   
//     Note : You have to achieve this functionality using the nested if
//         1) if the user is member and purchase amount is greater than 200 apply 15% discount.
//         2) if the user is member and purchase amount is greater than 100 apply 10% discount.  
//         3) if the user is member and purchase amount is less than 100 :  Member, but purchase total is too low for an extra discount.
//         4) if the user is not a member and purchase amount is greater than 500 apply 5% discount general discount.
//         5)  if the user is not a member and purchase amount is less than 500 : User is not a member. No member discounts apply.

//     Sample input :     isMember = true
//             purchaseTotal = 250
//     Sample output :  User is a member.
//              Qualifies for a 15% member discount!
//              Original Price: $250.00, Final Price: $212.50


//     Sample input :     isMember = false
//             purchaseTotal = 70
//     Sample output :  User is not a member. No member discounts apply.    
//              Original Price: $70.00, Final Price: $70.00

//     Sample input :     isMember = false;
//             purchaseTotal = 600;
//     Sample output : User is not a member. No member discounts apply.
//             Qualifies for a 5% general discount on large order.
//             Original Price: $600.00, Final Price: $570.00

let isUser =true;
let purchaseAmt =parseInt(prompt("Enter the Purchase Amount"));
let finalPrice=0;
let desc= 0;
let acp =0;
if(isUser==true){
    if(purchaseAmt>=100&&purchaseAmt<200){
      desc = 0.10*purchaseAmt;
        
        acp =purchaseAmt-desc;
        console.log(`User is a member.`);
        console.log(" Qualifies for a 10% member discount!");
        console.log(`Original Price: $${purchaseAmt}, Final Price: $${acp.toFixed(2)}`)
    }
    else if(purchaseAmt>=200){
        desc = 0.15*purchaseAmt;
        acp =purchaseAmt-desc;
        console.log(`User is a member.`);
        console.log(" Qualifies for a 15% member discount!");
        console.log(`Original Price: $${purchaseAmt}, Final Price: $${acp.toFixed(2)}`);
    }
    else{
        console.log(`Member, but purchase total is too low for an extra discount`);
    }
}
else{
   if(purchaseAmt>=500){
    desc=0.5*purchaseAmt;
    acp =purchaseAmt-desc;
    console.log("User is not a member. No member discounts apply.");
console.log(" Qualifies for a 5% general discount on large order.");
console.log(` Original Price: $${purchaseAmt}, Final Price: $${acp.toFixed(2)}`);
   }
   else{
    console.log("User is not a member. No member discounts apply.");
    console.log(` Original Price: $${purchaseAmt}, Final Price: $${purchaseAmt}`);
   }

}



// Que 6.    Day of the Week Lookup (switch)
// ------
//      Display the name of the day based on a numerical representation (e.g., 1 for Monday, 2 for Tuesday).

// - The switch statement evaluates the dayNumber and matches it against case values. Once a match is found, the corresponding code block is executed, and break exits the switch. The default case handles any numbers that don't match.

//     Sample input : dayNumber = 3
//     Sample output : Day number 3 is: Wednesday  

//     Sample input:    dayNumber = 7
//     Sample output:  Day number 7 is: Sunday

//     Sample input:    dayNumber = 0
//     Sample output :  Invalid Day Number

let dayNumber =+ prompt("Enter the Day Number");
if(dayNumber<=0||dayNumber>8){
    console.log(" Invalid Day Number");
}
else{
    switch(dayNumber){
        case 1:
            console.log("Monday");
            break;
             case 2:
            console.log("Tuesday");
            break;
             case 3:
            console.log("Wednesday");
            break;
             case 4:
            console.log("Thurday");
            break;
             case 5:
            console.log("Friday");
            break;
             case 6:
            console.log("Saturday");
            break;
            case 7:
                console.log("Sunday");
    break;
    }
}



// Que 7.  Basic Calculator Operations (Switch)
// -------
//     Perform a mathematical operation (addition, subtraction, multiplication, division) based on an operator symbol.

// - The switch statement uses the operator string to determine which calculation to perform on num1 and num2. The default case handles unrecognized operators.

//     Sample input : operator = +
//     Sample output : Result of 5 + 2 is: 7    

//     Sample input : operator = *
//     Sample output : Result of 5 * 2 is: 10

//     Sample input :  num1 = 8;
//             num2 = 0;
//             operator = /
//     Sample output : Error: Division by zero

//     Sample input : operator = %
//     Sample output : Error: Invalid operator

let num1 =10;
let num2 =40;
let operation=prompt("Enter the Operation");

if((num1==0||num2==0)&&operation==="/"){
    console.log(`Error: Division by zero`);
}
else{
    switch(operation){
        case "+":
        console.log(num1+num2);
        break;

         case "-":
        console.log(num1-num2);
        break;

         case "*":
        console.log(num1*num2);
        break;

         case "/":
        console.log(num1/num2);
        break;
        default:
              console.log(`Error: Invalid operator`);
              break;
    }
}