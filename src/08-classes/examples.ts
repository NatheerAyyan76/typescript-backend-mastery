//! Example 1: Basic Class
class User {
  constructor(
    public id: string,
    public name: string,
  ) {}

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const user = new User("u_1", "Natheer");
console.log(user.greet());

//! Example 2: Access Modifiers + Encapsulation
class Wallet {
  private balance = 0;
  protected currency: string;

  constructor(currency: string) {
    this.currency = currency;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

//! Example 3: Inheritance
class CryptoWallet extends Wallet {
  constructor(private network: string) {
    super("USDT");
  }

  getWalletDetails(): string {
    return `Network: ${this.network}, Currency: ${this.currency}`;
  }
}

const cryptoWallet = new CryptoWallet("TRC20");
cryptoWallet.deposit(150);
console.log(cryptoWallet.getBalance());
console.log(cryptoWallet.getWalletDetails());

//! Example 4: readonly + static
class AppConfig {
  static appName = "TS Mastery";

  constructor(
    public readonly env: "dev" | "prod",
    public port: number,
  ) {}
}

const config = new AppConfig("dev", 3000);
console.log(AppConfig.appName, config.env, config.port);

//! Example 5: Abstract Class
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea());
