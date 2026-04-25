//! Example 1: String Enum
enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

const orderStatus: OrderStatus = OrderStatus.Paid;
console.log(orderStatus);

//! Example 2: Numeric Enum
enum UserRole {
  User, // 0
  Admin, // 1
  SuperAdmin, // 2
}

const role: UserRole = UserRole.Admin;
console.log(role, UserRole[role]);

//! Example 3: Enum in Function Parameters
enum PaymentMethod {
  Card = "CARD",
  Cash = "CASH",
  Wallet = "WALLET",
}

function processPayment(amount: number, method: PaymentMethod): string {
  return `Paid ${amount} by ${method}`;
}

console.log(processPayment(150, PaymentMethod.Card));

//! Example 4: Enum with Object Mapping
const statusMessages: Record<OrderStatus, string> = {
  [OrderStatus.Pending]: "Order is waiting for payment",
  [OrderStatus.Paid]: "Order payment received",
  [OrderStatus.Shipped]: "Order shipped",
  [OrderStatus.Delivered]: "Order delivered",
};

console.log(statusMessages[OrderStatus.Shipped]);
