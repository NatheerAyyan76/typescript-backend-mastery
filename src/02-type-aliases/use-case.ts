//! Example : User Management with Type Aliases

type UserId = string | number;

type CreateUserDTO = {
   name: string;
   email: string
}
type User = {
  id: UserId;
  name: string;
  email: string
}
type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string
}

class UserService {
  private users: User[] = [];
  createUser(dto: CreateUserDTO): User {
    if (!dto.email.includes('@'))
      throw new Error('Invalid Email')
    const alreadyExists = this.users.some((user) => user.email === dto.email);
    if(alreadyExists)
      throw new Error("Email already exists"); 
    const newUser: ApiResponse<User> = {
      success: true,
      data: {
        id:this.users.length + 1,
        ...dto
      },
      message: 'User Created' // Optional
    }
    this.users.push(newUser.data);
    return newUser.data
  }
  findAll():User[] {
    return this.users
  }
}
const userService = new UserService();
const user1 = userService.createUser({name:"Natheer", email: 'natheer@gmail.com'})
const user2 = userService.createUser({
  name: "Ali",
  email: "ali@gmail.com",
});
console.log(userService.findAll())
