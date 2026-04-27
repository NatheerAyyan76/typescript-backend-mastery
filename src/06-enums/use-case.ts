//! Use Case: Order Workflow with Enums

enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Shipped = "SHIPPED", // تم الشحن
  Delivered = "DELIVERED", // تم الشحن
  Cancelled = "CANCELLED", // تم الإلغاء
}

type Order = {
  id: string;
  customerName: string;
  total: number;
  status: OrderStatus;
};

class OrderService {
  private orders: Order[] = [];

  createOrder(customerName: string, total: number): Order {
    const order: Order = {
      id: `ord_${this.orders.length + 1}`,
      customerName,
      total,
      status: OrderStatus.Pending
    };

    this.orders.push(order);
    return order;
  }

  updateStatus(orderId: string, status: OrderStatus): Order {
    const order = this.orders.find((item) => item.id === orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.status = status;
    return order;
  }

  findByStatus(status: OrderStatus): Order[] {
    return this.orders.filter((order) => order.status === status);
  }

  findAll(): Order[] {
    return this.orders;
  }
}

const orderService = new OrderService();
const order1 = orderService.createOrder("Natheer", 200);
const order2 = orderService.createOrder("Ali", 150);
const order3 = orderService.createOrder('Saleh', 300)
orderService.updateStatus(order1.id, OrderStatus.Paid);
orderService.updateStatus(order2.id, OrderStatus.Shipped);
orderService.updateStatus(order3.id, OrderStatus.Paid);

console.log(orderService.findByStatus(OrderStatus.Paid));
console.log(orderService.findAll());
