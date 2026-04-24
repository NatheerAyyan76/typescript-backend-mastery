//! Example 1: User Management System

interface CreateUserDTO {
  name: string;
  email: string;
}
interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];
  createUser(dto: CreateUserDTO): User {
    if (!dto.email.includes("@")) {
      throw new Error("Invalid email address");
    } else if (this.users.some((user) => user.email === dto.email)) {
      throw new Error("Email already exists");
    }
    const newUser: User = {
      id: this.users.length + 1,
      ...dto,
    };
    this.users.push(newUser);
    return newUser;
  }
  findAll(): User[] {
    return this.users;
  }
}
const userService = new UserService();
const user1 = userService.createUser({
  name: "Natheer",
  email: "Natheer@gmail.com",
});
const user2 = userService.createUser({
  name: "Mohammed",
  email: "Mohammed@gmail.com",
});
//! Email already exists
// const user3 = userService.createUser({
//   name: "Mohammed",
//   email: "Mohammed@gmail.com",
// });
//! Invalid email address
// const user4 = userService.createUser({
//   name: "Mohammed",
//   email: "Mohammedgmail.com",
// });

console.log(userService.findAll());

//! Example 2: API Response System with Generics

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

class ProductService {
  private products: Product[] = [
    { id: 1, title: "Book", price: 1200 },
    { id: 2, title: "Pen", price: 200 },
  ];

  getAll(): ApiResponse<Product[]> {
    return {
      success: true,
      data: this.products,
      message: "Products retrieved successfully", // optional field
    };
  }
  getById(id: number): ApiResponse<Product | null> {
    const product = this.products.find((p) => p.id === id);
    return {
      success: !!product,
      data: product ?? null,
      message: product ? "Found" : "Not Found",
    };
  }
}
const productService = new ProductService();
console.log(productService.getAll()); // All products
console.log(productService.getById(1)); // Product with id 1
console.log(productService.getById(3)); // Product with id 3 (not found)
