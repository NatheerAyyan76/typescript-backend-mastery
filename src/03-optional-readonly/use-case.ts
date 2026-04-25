//! Use Case: User Update + Readonly Metadata

type User = {
  readonly id: string ;
  readonly createdAt: Date;
  name: string;
  email: string;
  phone?: string;
  address?: string;
};

type UpdateUserDTO = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

class UserService {
  private users: User[] = []
  createUser(name: string, email: string): User {
    const newUser: User = {
      id: `User Id ${this.users.length + 1}`, // string
      name,
      email,
      createdAt: new Date(),
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(userId: string, updates: UpdateUserDTO): User {
    const targetUser = this.users.find((user) => user.id === userId)
    if (!targetUser) {
      throw new Error("User not found");
    }

    // Merge only mutable fields. id/createdAt remain readonly.
    Object.assign(targetUser, updates);
    return targetUser;
  }

  findAll(): User[] {
    return this.users;
  }
}

const userService = new UserService();
const user = userService.createUser("Natheer", "natheer@gmail.com");

userService.updateUser(user.id, {
  phone: "+963911111111",
  address: "Hama, Syria",
});

console.log(userService.findAll());
