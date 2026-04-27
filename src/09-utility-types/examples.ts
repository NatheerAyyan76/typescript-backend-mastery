type User = {
  id: string;
  name: string;
  email: string;
  password: string
  role?: "admin" | "user";
};

//! Example 1: Pick
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: "1", name: "Natheer" }; // Selection specific fields
console.log(preview);

//! Example 2: Omit
type UserWithoutEmail = Omit<User, "password">; // Delete specific fields
const userWithoutEmail: UserWithoutEmail = {
  id: "2",
  email: 'natheer@gmail.com',
  name: "natheer",
  role: "user",
};
console.log(userWithoutEmail);

//! Example 3: Partial
type PartialUser = Partial<User>;
const partialUser: PartialUser = { email: "x@gmail.com" };
console.log(partialUser);

//! Example 4: Required
type RequiredUser = Required<User>
const requiredUser: RequiredUser = {
  id: "3",
  name: "Ali",
  email: "ali@example.com",
  password: 'pass1234',
  role: "admin",
};
console.log(requiredUser);

//! Example 5: Readonly
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
  id: "4",
  name: "Khaled",
  email: "khaled@example.com",
  password: 'pass1234'
};
// readonlyUser.name = "New Name"; // Error
console.log(readonlyUser);

//! Example 6: Record
type RolePermissions = Record<"admin" | "user", string[]>;

const permissions: RolePermissions = {
  admin: ["create", "update", "delete"],
  user: ["read"],
};

console.log(permissions);
