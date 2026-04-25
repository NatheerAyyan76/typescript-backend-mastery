//! Example 1: Generic Function
function getFirst<T>(arr: T[]): T | undefined{
  return arr[1]
}
console.log(getFirst([1,2,3,4]))
console.log(getFirst(['A',"B"]));



//! Example 2: Generic Type Alias
type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};
type User = {
  id: string,
  name: string
}
const userResponse: ApiResponse<User> = {
  success: true,
  data: { id: "u_1", name: "Natheer" },
};

const productsResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Book", "Pen"],
};

console.log(userResponse, productsResponse);

// //! Example 3: Generic Interface
interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
}

const paginatedUsers: PaginatedResult<{ id: string; email: string }> = {
  items: [{ id: "u_1", email: "ali@example.com" }],
  total: 1,
  page: 1,
};

console.log(paginatedUsers);

// //! Example 4: Generic Class
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("TypeScript");
console.log(numberBox.getValue(), stringBox.getValue());

// //! Example 5: Generic Constraints
type HasId = {
  id: string | number;
};

function getEntityId<T extends HasId>(entity: T): string | number {
  return entity.id;
}

console.log(getEntityId({ id: "p_1", title: "Book" }));



