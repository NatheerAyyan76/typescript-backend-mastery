//! Use Case: User Service with Typed Functions

type CreateUserInput = {
  name: string;
  email: string;
  role?: "admin" | "user";
};

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
};

type FindUserBy = (users: User[],val:string) => User | undefined;

function createUser(input: CreateUserInput): User {
  if (!input.email.includes("@")) {
    throw new Error("Invalid email");
  }
  return {
    id: `u_${Date.now()}`,
    name: input.name,
    email: input.email,
    role: input.role ?? "user",
    createdAt: new Date(),
  };
}

function createUsers(...inputs: CreateUserInput[]): User[] {
  return inputs.map((input) => createUser(input));
}

const findUserByEmail: FindUserBy = (users, email) => {
  return users.find((user) => user.email === email);
};

const users = createUsers(
  { name: "Natheer", email: "natheer@gmail.com", role: "admin" },
  { name: "Ali", email: "ali@gmail.com" },
  // { name: "Ali", email: "ali$gmail.com" }, invalid email
);
console.log(users)

console.log(findUserByEmail(users, "natheer@gmail.com"));
