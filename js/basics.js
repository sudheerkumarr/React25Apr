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

//function with default parameters
function mul(a, b = 10) {
  return a * b;
}
console.log(mul(10, 20)); // 200
console.log(mul(10)); // 100

// Rest parameters (...)
/*
 function add(x, y) {
     return x+y;
 }
 function add(x, y, z) {
     return x+y+z;
 }
*/

function add(x, ...nums) {
  let sum = x;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(add(10)); // 10
console.log(add(10, 20)); // 30
console.log(add(10, 20, 30)); // 60
console.log(add(10, 20, 30, 40, 50)); // 150

// Spread Operator(...) - copy an array - es6
const shapes = ["triangle", "square"];
const newShapes = [...shapes];
console.log();
console.log(shapes);
console.log(newShapes);

const newShapes1 = ["circle", ...shapes];
console.log(newShapes1);
const newShapes2 = [...shapes, "cube"];
console.log(newShapes2);
const newShapes3 = ["circle", ...shapes, "cube"];
console.log(newShapes3);

// Destructuring - es6
// 1. object destructuring
// 2. array destructuring
/*
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

*/

console.log(person.name);
console.log(person.age);
console.log(person.contactNos[0]);
console.log(person.address[0].city);

// Object destructuring
const { name, age } = person;
console.log();
console.log(name);
console.log(age);

// Array Destructuring
const [num1, num2] = person.contactNos;
// person.contactNos[0]
// person.contactNos[1]

console.log(num1);
console.log(num2);

const [addr1, addr2] = person.address;
// person.address[0];
// person.address[1];

console.log(addr1);
console.log(addr2);

// map & filter - es6
// map - applies same functionality on each and every element present in array
const numArr = [10, 20, 30, 40];

const sq = numArr.map((n) => n * n);
console.log(sq);

// function square(num) {
//     return num*num;
// }
// (num) =>  num*num;

// filter - filter based on condition
const result = numArr.filter((n) => n > 20);
console.log(result);
const evnNums = numArr.filter((n) => n % 2 == 0);
console.log(evnNums);

// class - es6
class Employee {
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
  }
  setEmpId(empId) {
    this.empId = empId;
  }
  getEmpId() {
    return this.empId;
  }
}
const emp1 = new Employee(1001, "Raj");
const emp2 = new Employee(1002, "Sam");
console.log(emp1);
console.log(emp2);

console.log(emp1.getEmpId()); // 1001
console.log(emp2.getEmpId()); // 1002
emp2.setEmpId(1005);
console.log(emp2.getEmpId()); // 1005


// export & import