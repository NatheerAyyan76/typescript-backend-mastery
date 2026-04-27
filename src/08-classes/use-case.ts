//! Use Case: Bank Account Service with Classes

class BankAccount {
  private balance = 0;

  constructor(
    public readonly accountNumber: string,
    public ownerName: string,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount { // كلاس لاضافة فائدة 
  constructor(
    accountNumber: string,
    ownerName: string,
    private interestRate: number,
  ) {
    super(accountNumber, ownerName);
  }

  applyInterest(): void {
    const currentBalance = this.getBalance();
    const interest = currentBalance * this.interestRate;
    this.deposit(interest);
  }
}

class BankService {
  private accounts: BankAccount[] = [];

  createSavingsAccount(
    accountNumber: string,
    ownerName: string,
    interestRate: number,
  ): SavingsAccount {
    const account = new SavingsAccount(accountNumber, ownerName, interestRate);
    this.accounts.push(account);
    return account;
  }

  findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }
}

const bankService = new BankService();
const account = bankService.createSavingsAccount("ACC-1001", "Natheer", 0.05);

account.deposit(1000);
account.applyInterest(); // 1050
account.withdraw(200); // 850

console.log(account.getBalance());
console.log(bankService.findAccount("ACC-1001"));
