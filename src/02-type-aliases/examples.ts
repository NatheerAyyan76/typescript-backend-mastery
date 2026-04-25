//! Example 1: Primitive Type Aliases

type Username = string;
type Age = number;
type IsAdmin = boolean;

const username: Username = 'Natheer';
const age: Age = 23;
const isAdmin: IsAdmin = true

console.log(username,age,isAdmin)




//! Example 2: Union Type Alias

type UserId = string | number
const id1: UserId = 'USER-1';
const id2: UserId = 1;
console.log(id1, id2)

//! Example 3: Object Type Alias

type User = {
  id: UserId;
  name: string;
  email: string
}
const user: User = {
  id: "USER-1",
  name: "Natheer",
  email: "natheer@gmail.com",
}
console.log(user)

//! Example 4: Function Type Alias
type FormatUser = (user:User) => string;
const formatUser: FormatUser = (user) => {
return `User: ${user.name}, Email: ${user.email}`;
}
console.log(formatUser(user))
//! Example 5: Nested Type Aliases

type Address = {
  city: string;
  country: string
}
type Customer = {
  id: UserId;
  name: string
  address: Address
}
const customer: Customer = {
  id: 1,
  name: 'Natheer',
  address: {
    city: "Hama",
    country: 'Syria'
  }
}
console.log(customer)

// //! Example 6: API Style Type Alias

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?:string
}
type Product = {
  id: UserId,
  title: string,
  price: number
}
const response: ApiResponse<Product> = {
  success: true,
  data: {
    id: 1,
    title: "Book",
    price: 1500
  }
}
console.log(response)