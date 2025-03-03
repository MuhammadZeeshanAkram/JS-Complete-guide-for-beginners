let number1=99;
console.log(typeof number1);//number
console.log(typeof(number1));//number


let number2="88";
console.log(typeof number2);//string

// but if we want to convert the string to number then:
let number4="77";

//Now we are converting  to number
number4=Number(number4)
console.log(typeof number4)//number
console.log(number4)//77


let number5="77abc";

//Now we are converting  to number
number5=Number(number5)
console.log(typeof number5)//number
console.log(number5)//Nan because its type is remains the number but the actual value is not a number(Nan) because we are using alphabets with number here and alphabets makes the number5 Nan


let number6=null;
console.log(typeof number6)//object
console.log(number6)//null













