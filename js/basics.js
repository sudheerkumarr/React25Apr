var x = 50;
console.log(x);
console.log(typeof x); // number

x = "str";
console.log(x);
console.log(typeof x); // string

console.log(typeof 10.0); // number
console.log(typeof true); // boolean
console.log(typeof 10 / 0); // NaN
console.log(typeof "h"); // string
console.log(typeof null); // object

function add() {
  return 10 + 20;
}

console.log(typeof add); // function

// es6 - let & const
for (let i = 0; i < 5; i++) {
  console.log(i); //0-4
}
//console.log(i); // ERR: i is not defined
console.log();

for (var j = 0; j < 5; j++) {
  console.log(j); //0-4
}
console.log(j); //5

// ctrl+alt+n

const y = 100;
//y = 200; //ERR: Assignment to constant variable

// Object
const person = {
  name: "Raj",
  age: 20,
  contactNos: [9999912345, 9999912346],
  address: [
    {
      city: "Chennai",
      state: "Tamilnadu",
    },
    {
      city: "Bangalore",
      state: "Karnataka",
    },
  ],
};

console.log(typeof person); // object
// Read
console.log(person.name);
console.log(person.contactNos[1]);
console.log(person.address[1].city);

// update
person.name = "Raj Kumar";
console.log(person.name);
person.contactNos.push(9999912347); // add new number
console.log(person.contactNos);

person.contactNos[0] = 9999912348; // modify existing number
console.log(person.contactNos);

person.address[0].city = "Hyderabad";
person.address[0].state = "Telangana";

console.log(person);
console.log(person.address);

// array
const colors = ["red", "green", "blue"];
console.log(colors); // ["red", "green", "blue"]
console.log(colors[2]); //blue

// Iterate array
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); // red, green, blue
}

console.log();

// push / pop
colors.pop(); // removes last element
console.log(colors);

colors.push("white");
console.log(colors);

console.log(typeof colors); // object

/* data types
number
string
NaN
object - null, object, array
function
boolean
*/

const newColors = ["black", "orange", "pink"];
newColors.push("yellow");
console.log(newColors); //[ 'black', 'orange', 'pink', 'yellow' ]

//newColors = colors; // TypeError: Assignment to constant variable.

const student = {
  rollNo: 100,
  name: "Ram",
};
console.log(student);
student.rollNo = 101;
console.log(student);

// Modify object values
student.name = "Sam";
console.log(student);
student["name"] = "Vicky";
console.log(student);

// student = {
//   rollNo: 201,
//   name: "Sam",
// }; // TypeError: Assignment to constant variable.

//console.log(student);

// Fuctions
function sub(x, y) {
  return x - y;
}
console.log(sub(10, 5)); //5

console.log();
// Arrow functions - es6
// function with more than one input argument
const substract = (x, y) => x - y;
console.log(substract(30, 10));

// function with no arguments
// function greet() {
//   console.log("Hello World!");
// }
// greet();

// arrow function - with no input arguments
const greet = () => console.log("Hello World!");
greet();

//
// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isEven = (num) => {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isEven = (num) => (num % 2 == 0 ? true : false);

console.log(isEven(10)); // true
