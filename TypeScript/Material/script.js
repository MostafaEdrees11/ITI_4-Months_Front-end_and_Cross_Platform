// access modifiers
// public  --> accessible from anywhere
// private  --> accessible only within the class
// protected  --> accessible within class and derived classes
//readonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(id, owner, balance) {
        this.taxRate = 0.05;
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this._balance += amount;
    };
    //   public method to return and show private balance
    BankAccount.prototype.getBalance = function () {
        return this._balance;
    };
    BankAccount.prototype.calcTax = function (amount) {
        return amount * this.taxRate;
    };
    return BankAccount;
}());
// Derived Class
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, owner, balance) {
        return _super.call(this, id, owner, balance) || this;
    }
    SavingAccount.prototype.calcInterest = function (rate) {
        // cannot access balance directly
        var balance = this.getBalance();
        var interest = balance * rate;
        var tax = interest * this.taxRate;
        return interest - tax;
    };
    return SavingAccount;
}(BankAccount));
var account1 = new BankAccount(1, "ahmed", 1500);
account1.deposit(500); //2000
console.log(account1.owner);
console.log(account1.getBalance());
var saving1 = new SavingAccount(2, "ali", 2000);
console.log(saving1.calcInterest(0.05));
