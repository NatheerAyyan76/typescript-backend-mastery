//! Example 1: Basic Types

const username: string = "Natheer";
const age: number = 23;
const isAdmin: boolean = true;
console.log(username, age, isAdmin);

//! Example 2: Interface for Object

interface User {
  id: number;
  name: string;
  age: number;
}
const user: User = {
  id: 1,
  name: "Natheer",
  age: 23,
};
console.log(user);

//! Example 3: Function with Interface

function getUserInfo(user: User): string {
  return `User: ${user.name}, Age: ${user.age}`;
}
console.log(getUserInfo(user));

//! Example 4: Nested Object Structure

interface Address {
  city: string;
  country: string;
}

interface Customer {
  id: number;
  name: string;
  address: Address;
}
const customer: Customer = {
  id: 1,
  name: "Natheer",
  address: {
    city: "Hama",
    country: "Syria",
  },
};
console.log(customer);

//! Example 6: API like Structure (Real Backend Style)

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
interface Product {
  id: number;
  title: string;
  price: number;
}

const response: ApiResponse<Product> = {
  success: true,
  data: {
    id: 1,
    title: "Book",
    price: 1200,
  },
  message: "Product retrieved successfully", // optional field
};
console.log(response);

