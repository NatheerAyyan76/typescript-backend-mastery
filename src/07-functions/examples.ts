//! Example 1: Basic Function Typing
const add = (a: number, b: number): number => {
  return a + b;
};
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(add(2, 3), multiply(2, 5)); // 5 10

//! Example 2: Function Type Alias
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (x, y) => x - y;
const divide: MathOperation = (x, y) => x / y;
console.log(subtract(10, 4), divide(20, 5));

//! Example 3: Optional + Default Parameters
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello ${title} ${name}`;
  }

  return `Hello ${name}`;
}

function applyDiscount(price: number, discount: number = 0): number {
  return price - price * discount;
}

console.log(greet("Natheer"), greet("Natheer", "Mr."));
console.log(applyDiscount(100), applyDiscount(100, 0.2));

//! Example 4: Rest Parameters
function sum(...values: number[]): number {
  return values.reduce((acc, el) => acc + el, 0);
}

console.log(sum(1, 2, 3, 4, 5));

//! Example 5: Function Overload
function formatValue(value: string): string;
function formatValue(value: number): string;

function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return `${value.toFixed(2)}`;
  }

  return value.toUpperCase();
}

console.log(formatValue(12.9956), formatValue("typescript"));
