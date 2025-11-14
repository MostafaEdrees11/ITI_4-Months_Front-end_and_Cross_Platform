// access modifiers
// public  --> accessible from anywhere
// private  --> accessible only within the class
// protected  --> accessible within class and derived classes
//readonly

class BankAccount {
  public readonly id: number;
  public owner: string;

  private _balance: number;

  protected taxRate: number = 0.05;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    this._balance += amount;
  }

  //   public method to return and show private balance
  public getBalance(): number {
    return this._balance;
  }

  private calcTax(amount: number): number {
    return amount * this.taxRate;
  }
}

// Derived Class

class SavingAccount extends BankAccount {
  constructor(id: number, owner: string, balance: number) {
    super(id, owner, balance);
  }

  calcInterest(rate: number): number {
    // cannot access balance directly
    const balance = this.getBalance();
    const interest = balance * rate;
    const tax = interest * this.taxRate;

    return interest - tax;
  }
}

const account1 = new BankAccount(1, "ahmed", 1500);
account1.deposit(500); //2000

console.log(account1.owner);
console.log(account1.getBalance());

const saving1 = new SavingAccount(2, "ali", 2000);
console.log(saving1.calcInterest(0.05))