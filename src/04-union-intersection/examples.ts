//! Example 1: Simple Union
type UserId = string | number;

const id1: UserId = 1;
const id2: UserId = "USE_2";

console.log(id1, id2);

//! Example 2: Discriminated Union
type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "failure";
  error: string;
};

type Result = Success | Failure;

function handleResult(result: Result): void {
  if (result.status === "success") {
    console.log("Data:", result.data);
    return;
  }

  console.log("Error:", result.error);
}

handleResult({ status: "success", data: "Saved successfully" });
handleResult({ status: "failure", error: "Validation failed" });

//! Example 3: Intersection
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  id: string;
  name: string;
};

type TimestampedUser = User & Timestamped;

const user: TimestampedUser = {
  id: "u_1",
  name: "Natheer",
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(user);
