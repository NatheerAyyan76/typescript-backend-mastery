// let name = 'world';
// console.log(`Hello, ${name}!`);

// function greet() {
//   console.log('Hello');
// }
// greet();

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));

// const sum = (a, b) => a + b;
// console.log(sum(5, 7));

// let nums = [1, 2, 3, 4];
// let squarres = nums.map((el) => el * el);
// console.log(squarres);

// let filtered = nums.filter((el) => el % 2 === 0);
// console.log(filtered);

// let total = nums.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(total);

// let users = {
//   name: 'Ali',
//   age: 30,
//   isAdmin: true,
//   greet: function () {
//     console.log('Hello iam ' + this.name);
//   },
// };
// console.log(users.name + ' ' + users.age + ' ' + users.isAdmin);
// console.log(users['name']);
// users.age = 40;
// console.log(users.age);
// users.email = 'ali@example.com';
// console.log(users.email);
// console.log(users);
// users.greet();
// let users = [
//   { name: 'Ali', age: 25 },
//   { name: 'Omar', age: 17 },
//   { name: 'Sara', age: 30 },
// ];

// let adults = users.filter((user) => user.age >= 18);
// console.log(adults);

// let names = adults.map((user) => user.name)

// console.log(names);

// let users = [
//   { name: 'Natheer', age: 30 },
//   { name: 'Ali', age: 25 },
//   { name: 'Omar', age: 17 },
//   { name: 'Sara', age: 30 },
//   {
//     greet: function () {
//       console.log('Hello');
//     },
//   },
// ];

// console.log(users);
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users[0].name);
// let x = users.filter((user) => user.age >= 19);
// console.log(x);
// let y = x.map((user) => user.name);
// console.log(y);
// console.log(users[4].greet());

// const users = {
//   name: 'Ali',
//   age: 30,
//   chiled: {
//     name: 'Omar',
//     age: 5,
//   },
// };
//  console.log(users);
// console.log(users.name);
// console.log(users.chiled.name);
// console.log(users['chiled']['age']);

// const user = {
//   name: 'Ali',
//   age: 30,
//   city: 'Damascus',
//   isAdmin: true,
// };

// console.log(user);
// const name = user.name;
// const age = user.age;

// ! the method above is called destructuring assignment, it allows us to extract properties from

// const { name, age, city, isAdmin, country = 'Syria' } = user;
// console.log(name);
// console.log(country);
// ! change the variable name to userName and userAge
// const { name: userName, age: userAge } = user;
// console.log(userName);
// console.log(userAge);

// ! destrcturing with objects and arrays
// const request = {
//   body: {
//     email: 'ali@example.com',
//     password: 'password123',
//   },
// };

// const { email, password } = request.body;
// console.log(email);
// console.log(password);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [f, s, ...rest] = numbers;
// console.log(f)
// console.log(s)
// console.log(rest)

// ! Spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];

// console.log(combined);

// ! Spread operator with objects

// const User = {
//   name: 'Ali',
//   age: 40,
// };

// const newUser = { ...User, age: 190 };
// console.log(newUser);

// ! Rest operator

// function sum(...numbers) {
//   return numbers.reduce((acc, el) => acc + el, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

// let nums = [1, 2, 3, 4, 5];
// const [first, ...rest] = nums;

// console.log(first);
// console.log(rest);

// const User = {
//   id: 1,
//   name: 'Ali',
//   email: 'ali@example.com',
//   password: 'password123',
// };

// const { password, ...userWithoutPassword } = User;
// console.log(userWithoutPassword);
// const myJsonObjectFromServer = JSON.parse(
//   '{"name": "Ali", "age": 30, "city": "Damascus"}',
// );

// console.log(myJsonObjectFromServer);

// const myJsonStringToServer = JSON.stringify(myJsonObjectFromServer);
// console.log(myJsonStringToServer);

// ! Asynchronous and synchronous JavaScript

// console.log(1)
// console.log(2)
// console.log(3)

// console.log('Start');

// setTimeout(() => {
//   console.log('This is a delayed message');
// }, 4000);
// console.log('End');

// setTimeout(() => {
//   console.log('Web API'); // web api browser
// }, 0);

// function one() {
//   console.log('One');
// }

// function two() {
//   one();
//   console.log('two');
// }

// function three() {
//   two();
//   console.log('three');
// }

// three();
// console.log(1);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// setTimeout(() => {
//   console.log(4);
// }, 0);

// console.log(2);
// setTimeout(() => {
//   console.log(x);
// }, 0);
// let x = 100;
// x += 100;

// ! Promises
// const myPromise = new Promise((res, rej) => {
//   let employese = ['Ali', 'Omar', 'Sara', 'Natheer'];
//   if (employese.length === 4) res(employese);
//   else rej(new Error('Employese list is not complete'));
// });

// myPromise
//   .then((message) => {
//     message.length = 2;
//     console.log(message);
//   })
//   .then((message) => {
//     message.length = 1;
//     console.log(message);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log('This will always run');
//   });

// const myPromise = new Promise((res, rej) => {
//   const employese = ['Ali', 'Omar', 'Sara', 'Natheer'];
//   if (employese.length > 3) res(employese);
//   else rej(new Error('Employese list is not complete'));
// });
// myPromise.then((message) => {
//   console.log(message);
// });

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('First promise resolved');
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('Second promise resolved');
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(new Error('Third promise rejected'));
//   }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (message) => {
//     console.log(message);
//   },
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (message) => {
//     console.log(message);
//   },
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (message) => {
//     console.log(message);
//   },
// );

// ! Async/Await

// function getDaat() {
//   return new Promise((res, rej) => {
//     let users = ['Ali', 'Omar', 'Sara', 'Natheer'];
//     if (users.length > 4) res('Users found');
//     else rej(new Error('Users not found'));
//   });
// }
// getDaat()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function getDaat() {
//   return new Promise((res, rej) => {
//     let users = ['Ali', 'Omar', 'Sara', 'Natheer'];
//     if (users.length > 4) res('Users found');
//     else rej(new Error('Users not found'));
//   });
// }
// getDaat()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function getData() {
//   let users = ['Ali', 'Omar', 'Sara', 'Natheer'];
//   if (users.length > 3) return Promise.resolve('Users found');
//   else return Promise.reject(new Error('Users not found'));
// }
// getData()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('Data fetched successfully');
//   }, 3000);
// });

// async function readData() {
//   console.log('Reading data...');
//   try {
//     console.log(await myPromise);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('after promise');
// }
// readData();

// const p1 = new Promise((res, rej) => {
//   const x = 19;
//   if (typeof x === 'number') res('x is a number');
//   else rej(new Error('x is not a number'));
// });

// function checkX() {
//   console.log(Promise.resolve(p1));
// }
// checkX();

// const users = {
//   name: 'Ali',
//   age: 30,
//   city: 'Damascus',
//   isAdmin: true,
// };
// const { name = users.name } = users;
// console.log(name);

// ! Classes
// creates objects with shared properties and methods
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('Hello, I am ' + this.name);
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.role = 'admin';
//   }
//   deleteUser(user) {
//     console.log('User ' + user.name + ' has been deleted by ' + this.role);
//   }
//   greet() {
//     super.greet(); // calls the greet method of the parent class (User)
//     console.log('Hello i am an admin');
//   }
// }

// // objects instances of the class, they can have their own properties and methods
// const user1 = new User('Ali', 30);
// const user2 = new User('Omar', 25);
// const admin = new Admin('Sara', 34);
// admin.greet();
// admin.deleteUser(user1);
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('Hello, i am ' + this.name);
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.role = 'Admin';
//   }
//   deleteUser(user) {
//     console.log('User ' + user.name + ' has been deleted by ' + this.role);
//   }
// }
// const user1 = new User('Ali', 30);
// const admin = new Admin('Sara', 33);
// admin.greet();
// admin.deleteUser(user1);
// user1.greet();

// class User {
//   constructor(name) {
//     this._name = name;
//   }
//   set name(value) {
//     if (value.length < 3) {
//       console.log('Name to short');
//       return;
//     }
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }
// }
// let user = new User('Ali');
// user.name = 'Omar';
// console.log(user.name);

// class userService {
//   getUser() {
//     return { name: 'Ali', age: 30 };
//   }
// }

// class userController {
//   constructor(userService) {
//     this.userService = userService;
//   }
//   get() {
//     return this.userService.getUser();
//   }
// }

// const userServic = new userService();
// const userControlle = new userController(userServic);
// console.log(userControlle.get());
