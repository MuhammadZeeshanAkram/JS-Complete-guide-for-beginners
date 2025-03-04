//There are two types of memory:
//stack memory and heap memory.

//Stack(Primitive Data Types):
//Stack memory is used to store primitive values and function calls.

//heap(Non-Primitive Data Types):
//Heap memory is used to store complex objects like arrays, objects, and functions.


let car="corolla";
car2=car;
console.log(car2);//corolla
car2="civic";
console.log(car2);//civic

//here above you can see that the memory that is allocated to the car contains the value i.e corolla but the corolla gives the copy of its value to the car2 and then car2 has the value i.e civic and when we want to change the value of the car2 to civic then we can do it because the car2 has the copy value that obviously can be changed multiple times but the original value of the car remains the same i.e corolla and that's how the stack memory works.


//Now let's see how the heap memory works:
let person = {
    name: "Zeeshan",
    age: 25,
    city: "Lahore"
};
let person2=person;
console.log(person2.name);//Zeeshan 
person2.name="Ali";
console.log(person2.name);//Ali
console.log(person.name);//Ali

//here above you can see that the memory that is allocated to the person contains the object that has the key-value pairs and the person2 has the refrence of the object value that is stored in the person and when we change the value of the person2 then the value of the person also changes because the person2 has the reference of the object that is stored in the person and that's how the heap memory works.