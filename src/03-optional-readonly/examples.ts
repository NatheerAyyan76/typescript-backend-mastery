//! Example 1: Optional Property (?)
type UserID = string | number
type UserProfile = {
  id: UserID,
  name: string,
  bio?: string // bio => stirng | undefind
}
const profile1:UserProfile = {
  id: "USER_1",
  name: "Mohammed",
}
const profile2 : UserProfile = {
  id : 'USER_2',
  name: 'Natheer',
  bio: 'BackEnd Developer Learning NestJS and Prisma and PostgreSQL'
}
console.log(profile1, profile2)


//! Example 2: Readonly Property

type Product = {
  readonly id: string
  title: string;
  price: number
}

const product: Product = {
  id: "ID-01",
  title: "TypeScript Book",
  price: 120,
};
product.title = 'Advances TypeScript Book'
// product.id = "ID-02"; //! Error: Cannot assign to readonly property

console.log(product);

//! Example 3: Optional + Readonly Together


type Account = {
  readonly id: string;
  email: string;
  phone?: string;
};

const account: Account = {
  id: "USER_1",
  email: "natheer@gmail.com",
};

account.email = "natheerayyan@gmail.com";
account.phone = "+963900000000";

console.log(account);