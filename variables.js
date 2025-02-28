//Note the naming convension is camel case most important in declaring varibles
//General knowledge is that early js dont know what is scope 
//General knowledge is that the state if changing then we can use let with it rather than const as const asks state to remain same throughout
//if varialble is accessed outside the scope then it is said to be a global varible that can be accessed from anywhere in the program and most important issue with it is that it can over write variables
//the const can only be declared once and cannot change the variable value  after it  
//Its best practive to not use var instead use the let and const  as it is scope oriented but var is not scope oriented and something written inside curly braces is scope and that is called block scope and var value that is declared inside the scope can also be declared outside the block scope and that could cause error in the code same occurs with function that if used var inside function then it can also be used outside the function
//so we can say that using var is bad practice as it is not block scope or function scope
//For example 
// {
//     var toy = "Car";
// }
// console.log(toy); // 😱 It prints "Car"! The toy escaped!

//With using let here then:
// {
//     let toy = "Car";
//     console.log(toy); // Prints: Car
// }
// console.log(toy); // ❌ Error! The toy is inside the box.
//If we decalre variable in js and dont give value of it then the value of that variable is null





const accountId=212121
let accountEmail="zeeshansiddiqui@gmail.com"
var accountCity=43
var password=3434
accountCity="jaipur"
let car;


//Changing the above values
//accountId=43//here the accountId will not change as it is under const variable
accountEmail="bhaijan@gmail.com"
accountCity="karachi"

//Here we are printing the values of varible line by line 
console.log(accountId)
console.log(accountEmail)
console.log(accountCity)
console.log(password)

//Here we are printing the values in a single command of console
console.table([accountId,accountCity,accountEmail,password,car])