//! Use Case: Generic Repository + Generic API Response

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

type BaseEntity = {
  id: string;
};

class Repository<T extends BaseEntity> {
  private items: T[] = [];

  create(item: T): T {
    this.items.push(item);
    return item;
  }

  findAll(): T[] {
    return this.items;
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

type User = {
  id: string;
  name: string;
  email: string;
};

type Product = {
  id: string;
  title: string;
  price: number;
};

const userRepository = new Repository<User>();
const productRepository = new Repository<Product>();

userRepository.create({ id: "u_1", name: "Natheer", email: "natheer@gmail.com" });
productRepository.create({ id: "p_1", title: "TypeScript Book", price: 99 });

function toApiResponse<T>(data: T, message?: string): ApiResponse<T> {
  const response: ApiResponse<T> = {
    success: true,
    data,
  };

  if (message !== undefined) {
    response.message = message;
  }

  return response;
}

const usersResponse = toApiResponse(userRepository.findAll(), "Users fetched successfully");
const productResponse = toApiResponse(productRepository.findById("p_1"), "Product fetched");

console.log(usersResponse);
console.log(productResponse);
